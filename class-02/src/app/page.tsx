import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
      <h1 className="bg-[#1fb6ff] px-3 py-2 rounded-lg ">blue</h1>
      <h1 className="bg-[#7e5bef] px-3 py-2 rounded-lg ">purple</h1>
      <h1 className="bg-[#ff49db] px-3 py-2 rounded-lg ">pink</h1>
      <h1 className="bg-[#ff7849] px-3 py-2 rounded-lg ">orange</h1>
      <h1 className="bg-[#13ce66] px-3 py-2 rounded-lg ">green</h1>
      <h1 className="bg-[#ffc82c] px-3 py-2 rounded-lg ">yellow</h1>
      <h1 className="bg-[#273444] px-3 py-2 rounded-lg text-white">
        gray-dark
      </h1>
      <h1 className="bg-[#8492a6] px-3 py-2 rounded-lg ">gray</h1>
      <h1 className="bg-[#d3dce6] px-3 py-2 rounded-lg ">gray-light</h1>
    </main>
  );
}
