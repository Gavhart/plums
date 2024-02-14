import React from "react";
import projectData from "@/data/data.json";
import NoteNameBreadcrumbs from "@/components/Breadcrumbs/NoteNameBreadcrumbs";

// todo display breadcrumbs home / folders / folderid / note name

const Page = ({ params }: { params: { noteId: string; folderId: string } }) => {
  const folder = projectData.folders.find(
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
      {projectData.folders
        .filter((folder) => folder.id === params.folderId)
        .map((folder) => (
          <div key={folder.id}>
            {folder.notes
              .filter((note) => note.id === params.noteId)
              .map((note) => (
                <div key={note.id}>
                  <p className="text-2xl bold py-4 pl-4 ">{note.title}</p>
                  <p className="bold opacity-50">{note.content}</p>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Page;
