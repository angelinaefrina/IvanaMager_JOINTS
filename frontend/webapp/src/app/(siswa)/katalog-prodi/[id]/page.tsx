export default async function DetailProdiPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Detail Program Studi: {id}</h1>
    </div>
  );
}
