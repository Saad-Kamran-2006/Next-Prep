'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
  const CustomLink = ({ href, title, className="" }: any) => {
    return (
      <Link href={href} className={`${className} ${pathname === href ? "underline font-bold " : ""}`}>
        {title}
      </Link>
    );
  };
  return (
      <div
      className="mb-20 mt-5 text bg-gray-900 px-2 py-1 rounded text-white"
    >
      <CustomLink href={"/profile"} title={"Profile"} className="mx-5" />
      <CustomLink href={"/blog"} title={"Blog"} className="mx-5" />
    </div>
  );
};

export default Navbar;
