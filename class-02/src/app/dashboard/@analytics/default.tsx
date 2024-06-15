import Card from "@/components/Card";
import { delay } from "@/lib/delay";
import React from "react";

const Default = async () => {
  await delay(3000);
  return <Card className="bg-orange-500">Default Analytics</Card>;
};

export default Default;
