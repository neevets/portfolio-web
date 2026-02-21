export const InitialLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div
        className="h-14 w-14 rounded-full border border-border/60 border-t-primary animate-professional-loader"
        aria-label="Cargando sitio"
        role="status"
      />
    </div>
  );
};

