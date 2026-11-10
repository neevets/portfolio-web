type InitialLoaderProps = {
  isExiting?: boolean;
  onCycleComplete?: () => void;
};

export const InitialLoader = ({
  isExiting = false,
  onCycleComplete,
}: InitialLoaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity ease-out ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: "450ms" }}
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
