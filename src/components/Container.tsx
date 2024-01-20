export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl py-8 lg:py-16 m-auto min-h-screen print:py-4">
      <div className="px-8">{children}</div>
    </div>
  );
}
