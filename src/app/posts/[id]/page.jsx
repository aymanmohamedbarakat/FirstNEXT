// app/posts/[id]/page.jsx
import PostDetails from "@/app/components/postDetails";
import React, { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const { id } = params;

  const loadingJsx = (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <div className="text-xl text-blue-700">Loading...</div>
      </div>
    </div>
  );

  return (
    <div className=" container mx-auto flex flex-col justify-center items-center gap-10 p-10 ">
      <h1 className="text-center text-4xl">Post Details</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetails id={id} />
      </Suspense>
    </div>
  );
}
