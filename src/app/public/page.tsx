"use client";

import { useSession } from "next-auth/react";

const PublicPage = () => {
  const { data: session } = useSession();

  return (
    <div className="p-5">
      <div className="flex h-screen w-full flex-col justify-center">
        <h1>Public Page</h1>
        {session && (
          <pre className="m-10 rounded-md bg-white p-10 text-sm text-black">
            {JSON.stringify(session, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default PublicPage;
