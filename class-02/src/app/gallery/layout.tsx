export default function RootLayout({
    children,
    modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="w-[100%] h-[100&] flex flex-col items-center gap-y-10">
      <div>{children}</div>
      <div>{modal}</div>
    </main>
  );
}
