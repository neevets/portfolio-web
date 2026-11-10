import { useEffect } from "react";

type InitialLoaderProps = {
  isExiting?: boolean;
  onCycleComplete?: () => void;
};

export const InitialLoader = ({
  isExiting = false,
  onCycleComplete,
}: InitialLoaderProps) => {
  useEffect(() => {
    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      body.style.overflow = previousBodyOverflow;
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity ease-out ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: "450ms", height: "100vh", minHeight: "100dvh", touchAction: "none" }}
    >
      <div
        className="initial-loader-shape"
        aria-label="Loading site"
        role="status"
        onAnimationIteration={(event) => {
          if (
            event.animationName === "initial-loader-rotate" &&
            event.pseudoElement === ""
          ) {
            onCycleComplete?.();
          }
        }}
      />
    </div>
  );
};
