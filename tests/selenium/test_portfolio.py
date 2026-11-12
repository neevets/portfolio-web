import os
import subprocess
import time
from urllib.request import urlopen

import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait


BASE_URL = "http://127.0.0.1:8081"


@pytest.fixture(scope="module")
def preview_server():
    process = subprocess.Popen(
        [
            "npm",
            "run",
            "dev",
            "--",
            "--host",
            "127.0.0.1",
            "--port",
            "8081",
            "--strictPort",
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.STDOUT,
    )

    try:
        for _ in range(60):
            if process.poll() is not None:
                raise RuntimeError("Vite dev server exited before becoming ready")
            try:
                with urlopen(BASE_URL, timeout=1):
                    break
            except Exception:
                time.sleep(1)
        else:
            raise TimeoutError("Vite dev server did not become ready")

        yield BASE_URL
    finally:
        process.terminate()
        try:
            process.wait(timeout=10)
        except subprocess.TimeoutExpired:
            process.kill()


@pytest.fixture
def browser():
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1440,1000")
    if os.getenv("CI"):
        options.add_argument("--disable-gpu")

    driver = webdriver.Chrome(options=options)
    driver.set_page_load_timeout(30)
    yield driver
    driver.quit()


def test_homepage_loads_and_mounts_react(preview_server, browser):
    browser.get(preview_server)
    WebDriverWait(browser, 15).until(
        lambda driver: driver.title and "Neevets" in driver.title
    )
    WebDriverWait(browser, 15).until(
        lambda driver: driver.find_element("id", "root").find_elements("xpath", "./*")
    )
    assert "Neevets" in browser.title


def test_unknown_route_renders_application(preview_server, browser):
    browser.get(f"{preview_server}/this-route-should-not-exist")
    WebDriverWait(browser, 15).until(
        lambda driver: driver.find_element("id", "root").find_elements("xpath", "./*")
    )
    assert "Neevets" in browser.title
