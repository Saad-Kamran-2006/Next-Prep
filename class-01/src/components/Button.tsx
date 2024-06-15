"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();
  const handleClick = async (): Promise<any> => {
    const result = await new Promise((res) =>
        setTimeout(() => (
        res(router.push('/auth/login'))
      ), 5000)
    );
    result;
  };
  return <button onClick={handleClick}>Button</button>;
};

export default Button;
