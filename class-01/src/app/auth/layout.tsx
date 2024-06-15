'use client'
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  // console.log(input)
  return (
    <div>
      {children}
      <input type="text" placeholder="Enter Name" value={input} onChange={e => setInput(e.target.value)} />
      <Link className=" px-5" href={"/auth/login"}>
        Login
      </Link>
      <Link className=" px-5" href={"/auth/register"}>
        Register
      </Link>
    </div>
  );
}
