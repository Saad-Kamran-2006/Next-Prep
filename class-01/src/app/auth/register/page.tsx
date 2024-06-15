"use client";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

const Register = () => {
  const pathName = usePathname();
  console.log(pathName);
  return <div>register page</div>;
};

export default Register;
