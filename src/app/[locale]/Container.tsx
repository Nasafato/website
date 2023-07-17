export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl py-8 lg:py-16 m-auto min-h-screen">
      <div className="px-8">{children}</div>
    </div>
  );
}
