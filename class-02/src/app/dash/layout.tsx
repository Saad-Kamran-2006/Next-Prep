export default function RootLayout({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <main className="w-[100%] h-[100&] flex flex-col items-center p-10 gap-y-10">
      <div>{children}</div>
      <div className="flex w-[70vw] h-[60vh]">
        <div className="w-[50%] h-[100%] flex justify-center items-center bg-pink-500">{analytics}</div>
        <div className="w-[50%] h-[100%] flex justify-center items-center bg-green-500">{team}</div>
      </div>
    </main>
  );
}
