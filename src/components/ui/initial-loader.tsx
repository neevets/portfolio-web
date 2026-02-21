export const InitialLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="initial-loader-shape" aria-label="Cargando sitio" role="status" />
    </div>
  );
};
