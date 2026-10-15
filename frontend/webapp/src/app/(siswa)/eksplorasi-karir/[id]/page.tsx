export default async function DetailKarirPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Detail Karir: {id}</h1>
    </div>
  );
}
