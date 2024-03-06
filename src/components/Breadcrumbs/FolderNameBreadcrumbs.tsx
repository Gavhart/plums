"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@material-tailwind/react";

interface FolderNameBreadcrumbsProps {
  folderName: string;
  folderId: string;
}

const FolderNameBreadcrumbs = ({
  folderName,
  folderId,
}: FolderNameBreadcrumbsProps) => {
  return (
    <div>
      <Breadcrumbs
        className="bg-custom-off-white opacity-80 text-custom-dark-gray"
        placeholder={null}
      >
        <Link href="/">Home</Link>
        <Link href="/topics/">Topics</Link>
        <Link href={`/topics/${folderId}`}>{folderName}</Link>
      </Breadcrumbs>
    </div>
  );
};

export default FolderNameBreadcrumbs;
