import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-white bg-gray-900 h-12 gap-x-10 flex items-center justify-center">
      <Link className="hover:underline pb-[2px]" href={"/"}>Home</Link>
      <Link className="hover:underline pb-[2px]" href={"/book"}>Book</Link>
      <Link className="hover:underline pb-[2px]" href={"/dashboard"}>Dashboard</Link>
      <Link className="hover:underline pb-[2px]" href={"/dash"}>Dash</Link>
      <Link className="hover:underline pb-[2px]" href={"/gallery"}>Gallery</Link>
      <Link className="hover:underline pb-[2px]" href={"/image-gallery"}>Image Gallery</Link>
      <Link className="hover:underline pb-[2px]" href={"/photos"}>Photos</Link>
    </div>
  );
};

export default Navbar;
