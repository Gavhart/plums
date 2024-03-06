import React from "react";
import projectData from "@/data/data.json";
import Link from "next/link";
import FolderNameBreadcrumbs from "@/components/Breadcrumbs/FolderNameBreadcrumbs";

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

      {projectData.topics
        .filter((folder) => folder.id === params.folderId)
        .map((folder) => (
          <div key={folder.id}>
            <p className="text-2xl bold py-4 pl-4">{folder.name} Topic</p>
            {folder.notes.map((note) => (
              <div key={note.id}>
                <Link href={`/folders/${params.folderId}/${note.id}`}>
                  <p className="border py-4 px-4 flex flex-col gap-4">
                    {note.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Page;
