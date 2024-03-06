"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@material-tailwind/react";

const FoldersBreadcrumbs = () => {
  return (
    <div>
      <Breadcrumbs
        className="bg-custom-off-white opacity-80 text-custom-dark-gray"
        placeholder={null}
      >
        <Link href="/">Home</Link>
        <Link href="/topics/">Topics</Link>
      </Breadcrumbs>
    </div>
  );
};

export default FoldersBreadcrumbs;
