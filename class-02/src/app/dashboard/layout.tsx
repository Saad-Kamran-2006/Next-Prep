import Loading from "@/components/Loading";
import React, { Suspense } from "react";

export default function DashboardLayout({
  children,
  user,
  analytics,
  notifications,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center gap-y-16 p-5">
      <div>{children}</div>
      <div className="flex bg-red-300">
        <div>
          <Suspense fallback={<Loading section={"Users"} className="bg-pink-300" />}>
            <div>{user}</div>
          </Suspense>
          <Suspense fallback={<Loading section={"Analytics"} className="bg-orange-300" />}>
            <div>{analytics}</div>
          </Suspense>
        </div>
        <Suspense fallback={<Loading section={"Notifications"} className="bg-green-300" />}>
          <div className="flex flex-1">{notifications}</div>
        </Suspense>
      </div>
    </main>
  );
}
