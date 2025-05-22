import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <div className="text-xl text-blue-700">Loading...</div>
      </div>
    </div>
  );
}
