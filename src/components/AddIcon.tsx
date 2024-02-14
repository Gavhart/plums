import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const AddIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PlusIcon className="w-20 h-20" />
      <h1 className="text-5xl">Recent</h1>
    </div>
  );
};

export default AddIcon;
