import Card from "@/components/Card";
import { delay } from "@/lib/delay";
import Link from "next/link";
import React from "react";

const page = async () => {
  await delay(2000);
  return (
    <Card className="bg-blue-500">
      Archive Notifications
      <Link
        href={"/dashboard"}
        className="absolute left-auto top-[55%] hover:bg-opacity-90 focus:scale-95 block text-xs px-3 py-2 bg-gray-900 text-white rounded-md"
      >
        Default
      </Link>
    </Card>
  );
};

export default page;
