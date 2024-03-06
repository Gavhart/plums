import React from "react";
import projectData from "@/data/data.json";
import NoteNameBreadcrumbs from "@/components/Breadcrumbs/NoteNameBreadcrumbs";
import TextContentData from "@/components/TextContentData";

const Page = ({ params }: { params: { noteId: string; folderId: string } }) => {
  const folder = projectData.topics.find(
    (folder) => folder.id === params.folderId,
  );
  const folderName = folder ? folder.name : "";
  const folderId = folder ? folder.id : "";
  // get note names
  const note = folder
    ? folder.notes.find((note) => note.id === params.noteId)
    : "";
  const noteName = note ? note.title : "";
  const noteId = note ? note.id : "";
  console.log(noteName);

  return (
    <div>
      <NoteNameBreadcrumbs
        folderName={folderName}
        folderId={folderId}
        noteName={noteName}
        noteId={noteId}
      />
      <TextContentData noteId={params.noteId} />
    </div>
  );
};

export default Page;
