import { memo } from "react";

import NginxLogo from "@/assets/skills/nginx.svg";
import GrafanaLogo from "@/assets/skills/grafana.svg";
import PrometheusLogo from "@/assets/skills/prometheus.svg";
import BashLogo from "@/assets/skills/bash.svg";
import PowerShellLogo from "@/assets/skills/powershell.svg";
import ViteLogo from "@/assets/skills/vite.svg";
import SwaggerLogo from "@/assets/skills/swagger.svg";
import ApacheLogo from "@/assets/skills/apache.svg";
import OpenTelemetryLogo from "@/assets/skills/opentelemetry.svg";
import JestLogo from "@/assets/skills/jest.svg";
import JestDarkLogo from "@/assets/skills/jest-dark.svg";
import JenkinsLogo from "@/assets/skills/jenkins.svg";
import PostmanLogo from "@/assets/skills/postman.svg";
import JSONLogo from "@/assets/skills/json.svg";
import JSONDarkLogo from "@/assets/skills/json-dark.svg";
import Auth0Logo from "@/assets/skills/auth0.svg";
import AWSLogo from "@/assets/skills/aws.svg";
import AWSDarkLogo from "@/assets/skills/aws-dark.svg";
import AzureLogo from "@/assets/skills/azure.svg";
import OracleLogo from "@/assets/skills/oracle.svg";
import ESLintLogo from "@/assets/skills/eslint.svg";
import PrettierLogo from "@/assets/skills/prettier.svg";
import JWTLogo from "@/assets/skills/jwt.svg";
import MCPLogo from "@/assets/skills/mcp.svg";
import VueLogo from "@/assets/skills/vuejs.svg";
import SvelteLogo from "@/assets/skills/svelte.svg";
import NextLogo from "@/assets/skills/nextjs.svg";
import FlaskLogo from "@/assets/skills/flask.svg";
import SocketIOLogo from "@/assets/skills/socketio.svg";
import LinuxLogo from "@/assets/skills/linux.svg";
import VMwareLogo from "@/assets/skills/vmware.svg";
import VMwareDarkLogo from "@/assets/skills/vmware-dark.svg";
import WindowsLogo from "@/assets/skills/windows.svg";
import WebSocketLogo from "@/assets/skills/websocket.svg";
import PuTTYLogo from "@/assets/skills/putty.svg";
import GCCLogo from "@/assets/skills/gcc.svg";
import LLVMLogo from "@/assets/skills/llvm.svg";
import OpenSSLLogo from "@/assets/skills/openssl.svg";
import OpenSSLDarkLogo from "@/assets/skills/openssl-dark.svg";

interface BrandAssetIconProps {
  src: string;
  invertOnDark?: boolean;
}

const BrandAssetIcon = ({ src, invertOnDark = false }: BrandAssetIconProps) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    draggable={false}
    className="h-full w-full object-contain"
    data-invert-on-dark={invertOnDark ? "true" : undefined}
  />
);


const ThemeAwareBrandAssetIcon = ({ lightSrc, darkSrc }: { lightSrc: string; darkSrc: string }) => (
  <>
    <img src={lightSrc} alt="" aria-hidden="true" draggable={false} className="h-full w-full object-contain dark:hidden" />
    <img src={darkSrc} alt="" aria-hidden="true" draggable={false} className="hidden h-full w-full object-contain dark:block" />
  </>
);

export const NginxIcon = memo(() => <BrandAssetIcon src={NginxLogo} />);
export const GrafanaIcon = memo(() => <BrandAssetIcon src={GrafanaLogo} />);
export const PrometheusIcon = memo(() => <BrandAssetIcon src={PrometheusLogo} />);
export const BashIcon = memo(() => <BrandAssetIcon src={BashLogo} />);
export const PowerShellIcon = memo(() => <BrandAssetIcon src={PowerShellLogo} />);
export const ViteIcon = memo(() => <BrandAssetIcon src={ViteLogo} />);
export const SwaggerIcon = memo(() => <BrandAssetIcon src={SwaggerLogo} />);
export const ApacheIcon = memo(() => <BrandAssetIcon src={ApacheLogo} />);
export const OpenTelemetryIcon = memo(() => <BrandAssetIcon src={OpenTelemetryLogo} />);
export const JestIcon = memo(() => (
  <>
    <img src={JestLogo} alt="" aria-hidden="true" draggable={false} className="h-full w-full object-contain dark:hidden" />
    <img src={JestDarkLogo} alt="" aria-hidden="true" draggable={false} className="hidden h-full w-full object-contain dark:block" />
  </>
));
export const JenkinsIcon = memo(() => <BrandAssetIcon src={JenkinsLogo} />);
export const PostmanBrandIcon = memo(() => <BrandAssetIcon src={PostmanLogo} />);
export const JSONIcon = memo(() => (
  <>
    <img src={JSONLogo} alt="" aria-hidden="true" draggable={false} className="h-full w-full object-contain dark:hidden" />
    <img src={JSONDarkLogo} alt="" aria-hidden="true" draggable={false} className="hidden h-full w-full object-contain dark:block" />
  </>
));
export const Auth0Icon = memo(() => <BrandAssetIcon src={Auth0Logo} />);
export const AWSIcon = memo(() => (
  <>
    <img src={AWSLogo} alt="" aria-hidden="true" draggable={false} className="h-full w-full object-contain dark:hidden" />
    <img src={AWSDarkLogo} alt="" aria-hidden="true" draggable={false} className="hidden h-full w-full object-contain dark:block" />
  </>
));
export const AzureIcon = memo(() => <BrandAssetIcon src={AzureLogo} />);
export const OracleIcon = memo(() => <BrandAssetIcon src={OracleLogo} />);
export const ESLintIcon = memo(() => <BrandAssetIcon src={ESLintLogo} />);
export const PrettierIcon = memo(() => <BrandAssetIcon src={PrettierLogo} />);

export const JWTIcon = memo(() => <BrandAssetIcon src={JWTLogo} />);
export const MCPIcon = memo(() => <BrandAssetIcon src={MCPLogo} invertOnDark />);


export const VueIcon = memo(() => <BrandAssetIcon src={VueLogo} />);
export const SvelteIcon = memo(() => <BrandAssetIcon src={SvelteLogo} />);
export const NextIcon = memo(() => (
  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white p-[2px]">
    <BrandAssetIcon src={NextLogo} />
  </span>
));
export const FlaskIcon = memo(() => <BrandAssetIcon src={FlaskLogo} invertOnDark />);
export const SocketIOIcon = memo(() => <BrandAssetIcon src={SocketIOLogo} invertOnDark />);
export const WebSocketsIcon = memo(() => <BrandAssetIcon src={WebSocketLogo} />);
export const LinuxIcon = memo(() => <BrandAssetIcon src={LinuxLogo} />);
export const WindowsIcon = memo(() => <BrandAssetIcon src={WindowsLogo} />);
export const VMwareIcon = memo(() => <ThemeAwareBrandAssetIcon lightSrc={VMwareLogo} darkSrc={VMwareDarkLogo} />);
export const PuTTYIcon = memo(() => <BrandAssetIcon src={PuTTYLogo} />);
export const GCCIcon = memo(() => <BrandAssetIcon src={GCCLogo} />);
export const LLVMIcon = memo(() => <BrandAssetIcon src={LLVMLogo} />);

export const OpenSSLIcon = memo(() => <ThemeAwareBrandAssetIcon lightSrc={OpenSSLLogo} darkSrc={OpenSSLDarkLogo} />);
