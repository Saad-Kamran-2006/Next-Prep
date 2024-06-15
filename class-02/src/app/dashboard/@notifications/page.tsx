import Card from "@/components/Card";
import { delay } from "@/lib/delay";
import Link from "next/link";
import React from "react";

const page = async () => {
  await delay(5000);
  return (
    <Card className="bg-green-500">
      Notifications Page
      <Link
        href={"/dashboard/archive"}
        className="absolute left-auto top-[55%] hover:bg-opacity-90 focus:scale-95 block text-xs px-3 py-2 bg-gray-900 text-white rounded-md"
      >
        Archive
      </Link>
    </Card>
  );
};

export default page;
