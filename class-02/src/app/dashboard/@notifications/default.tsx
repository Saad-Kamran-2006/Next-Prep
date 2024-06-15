import Card from "@/components/Card";
import { delay } from "@/lib/delay";
import React from "react";

const Default = async () => {
  await delay(5000);
  return <Card className="bg-green-500">Default Notifications</Card>;
};

export default Default;
