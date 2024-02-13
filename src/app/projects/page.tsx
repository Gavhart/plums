import projectData from "@/data/data.json";

export default function TasksPage() {
  return (
    <>
      {projectData.folders.map((folder) => (
        <div
          key={folder.id}
          className="border py-4 px-4 flex flex-col gap-4 cursor-pointer"
        >
          <p>{folder.name}</p>
          {/*  Display notes inside the folder */}
          {folder.notes.map((note) => (
            <div key={note.id}>
              <p>{note.title}</p>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
