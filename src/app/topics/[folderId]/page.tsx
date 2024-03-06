import React from "react";
import projectData from "@/data/data.json";
import Link from "next/link";
import FolderNameBreadcrumbs from "@/components/Breadcrumbs/FolderNameBreadcrumbs";
import TextNotesData from "@/components/TextNotesData";

const Page = ({ params }: { params: { folderId: string } }) => {
  const folder = projectData.topics.find(
    (folder) => folder.id === params.folderId,
  );
  const folderName = folder ? folder.name : "";
  const folderId = folder ? folder.id : "";

  return (
    <div>
      <FolderNameBreadcrumbs folderName={folderName} folderId={folderId} />

      {/*  Add text  */}
      <p>+ text</p>
      {/*  Add link  */}
      <p>+ link</p>
      {/*  Add image  */}
      <p>+ image</p>

      <TextNotesData topicId={params.folderId} />
    </div>
  );
};

export default Page;
