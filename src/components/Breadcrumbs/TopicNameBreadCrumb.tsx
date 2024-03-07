"use client";

import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

const TopicNameBreadCrumb = ({
  currentTopic,
  folderId,
}: {
  currentTopic: string;
  folderId: string;
}) => {
  return (
    <div>
      <Breadcrumbs
        className="bg-custom-off-white opacity-80 text-custom-dark-gray"
        placeholder={null}
      >
        <Link href="/">Home</Link>
        <Link href="/topics/">Topics</Link>
        <Link href={`/topics/${folderId}`}>{currentTopic}</Link>
      </Breadcrumbs>
    </div>
  );
};

export default TopicNameBreadCrumb;
