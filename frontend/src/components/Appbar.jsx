import React from "react";

const Appbar = () => {
  return (
    <div className="h-14 flex justify-between shadow">
      <div className="flex flex-col justify-center h-full ml-4">TikPayy</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
