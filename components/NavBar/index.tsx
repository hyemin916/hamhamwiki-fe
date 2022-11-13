import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="cursor-pointer normal-case text-xl">햄햄위키</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-circle">
          <PlusIcon className="h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
