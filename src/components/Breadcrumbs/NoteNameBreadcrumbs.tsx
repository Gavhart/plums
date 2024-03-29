"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@material-tailwind/react";

interface NoteNameBreadcrumbsProps {
  folderName: string;
  folderId: string;
  noteName: string;
  noteId: string;
}

const NoteNameBreadcrumbs = ({
  folderName,
  folderId,
  noteName,
  noteId,
}: NoteNameBreadcrumbsProps) => {
  return (
    <div>
      <Breadcrumbs
        className="bg-custom-off-white opacity-80 text-custom-dark-gray"
        placeholder={null}
      >
        <Link href="/">Home</Link>
        <Link href="/topics/">Topics</Link>
        <Link href={`/topics/${folderId}`}>{folderName}</Link>
        <Link href={`/topics/${folderId}/${noteId}`}>{noteName}</Link>
      </Breadcrumbs>
    </div>
  );
};

export default NoteNameBreadcrumbs;
