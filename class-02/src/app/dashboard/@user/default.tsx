import Card from "@/components/Card";
import { delay } from "@/lib/delay";
import React from "react";

const Default = async () => {
  await delay(1000);
  return <Card className="bg-pink-500">Default Users</Card>;
};

export default Default 
