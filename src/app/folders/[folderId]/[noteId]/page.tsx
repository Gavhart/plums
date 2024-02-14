import React from "react";
import projectData from "@/data/data.json";

const Page = ({ params }: { params: { noteId: string; folderId: string } }) => {
  return (
    <div>
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
