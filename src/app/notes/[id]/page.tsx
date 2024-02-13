import React from "react";
import projectData from "@/data/data.json";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      {projectData.folders
        .filter((folder) => folder.id === params.id)
        .map((folder) => (
          <div key={folder.id}>
            {folder.notes.map((note) => (
              <div key={note.id}>
                <p className="border py-4 px-4 flex flex-col gap-4">
                  {note.title}
                </p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Page;
