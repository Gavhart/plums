import React from "react";
import projectData from "@/data/data.json";
import FolderNameBreadcrumbs from "@/components/Breadcrumbs/FolderNameBreadcrumbs";
import TextNotesData from "@/components/TextNotesData";
import LinkNotesData from "@/components/LinkNotesData";
import ImageNotesData from "@/components/ImageNotesData";

const Page = ({ params }: { params: { folderId: string } }) => {
  const folder = projectData.topics.find(
    (folder) => folder.id === params.folderId,
  );
  const folderName = folder ? folder.name : "";
  const folderId = folder ? folder.id : "";

  return (
    <div>
      <FolderNameBreadcrumbs folderName={folderName} folderId={folderId} />

      {/*<p>+ text</p>*/}
      {/*<p>+ link</p>*/}
      {/*<p>+ image</p>*/}

      <TextNotesData topicId={params.folderId} />
      <LinkNotesData topicId={params.folderId} />
      <ImageNotesData topicId={params.folderId} />
    </div>
  );
};

export default Page;
