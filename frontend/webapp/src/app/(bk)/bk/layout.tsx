export default function BkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: Guard role=bk + BK layout */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
