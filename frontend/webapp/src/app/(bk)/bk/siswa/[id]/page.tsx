export default async function BkDetailSiswaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Detail Siswa: {id} (UC11, UC12)</h1>
    </div>
  );
}
