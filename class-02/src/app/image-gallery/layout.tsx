export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      <div>{children}</div>
      <div>{modal}</div>
    </div>
  );
}
