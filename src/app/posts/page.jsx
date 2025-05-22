// import { useEffect, useState } from "react";

import Link from "next/link";
import Todo from "../components/todo";

export default async function page() {
  // const toDo = useState({});
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", //'force-cache' or 'no-store'
    next: {
      revalidate: 60,
    },
  });
  const posts = await response.json();
  console.log(posts);
  return (
    <div className=" container mx-auto flex flex-col gap-10 p-10 bg-blue-600">
      <h1 className="text-4xl">Posts</h1>
      {/* <div>
        <Todo />
      </div> */}
      {posts.map((el) => {
        return (
          <Link href={`/posts/${el.id}`} key={el.id}>
          <div className=" bg-blue-800 p-10 w-full rounded-3xl">
            <h1 className="text-2xl">{el.title}</h1>
            {/* <p>{el.body}</p> */}
          </div>
          </Link>
        );
      })}
    </div>
  );
}
