import Card from "@/components/Card";
import { delay } from "@/lib/delay";
import React from "react";

const page = async () => {
  await delay(1000);
  return <Card className="bg-pink-500">Users Page</Card>;
};

export default page;
