"use client";
import React, { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setToDo] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const result = await response.json();
      setToDo(result);
    }
    fetchData();
  }, []);

  return <div>
    <h1 className="text-5xl">{todo.title}</h1>
  </div>;
}
