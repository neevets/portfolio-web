type InitialLoaderProps = {
  isExiting?: boolean;
};

export const InitialLoader = ({ isExiting = false }: InitialLoaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-[450ms] ease-out ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="initial-loader-shape" aria-label="Cargando sitio" role="status" />
    </div>
  );
};
