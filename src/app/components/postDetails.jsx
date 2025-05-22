import React from "react";

export default async function PostDetails({ id }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60,
      },
    }
  );
  const post = await response.json();

  return (
    <div className="bg-blue-800 p-10 w-full rounded-3xl">
      <h1 className="text-2xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
