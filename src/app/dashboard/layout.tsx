export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">

        <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-green-500">
          Sidebar
        </div>

        <div className="w-[84%] md:w-[92%] lg:w-[84] xl:w-[86%] bg-red-200">
          content
        </div>
      
      </div>
  );
}
