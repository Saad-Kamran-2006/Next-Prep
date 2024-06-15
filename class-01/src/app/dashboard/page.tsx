"use client";
import React, { Suspense } from "react";
import Loading from "./loading";

const page = async () => {
  const random = Math.floor(Math.random() * 2);
  if (random === 1) {
    throw new Error("Custom Error");
  }
  // const text = await new Promise<any>((res) =>
  //   setTimeout(() => {
  //     res("Loading is completed");
  //   }, 2000)
  // );
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <Suspense fallback={<p>Loading......</p>}> */}
      {/* <h2>{text}</h2> */}
      {/* </Suspense> */}
    </div>
  );
};

export default page;
