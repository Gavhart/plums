import projectData from "@/data/data.json";
import Link from "next/link";

export default function TasksPage() {
  return (
    <>
      {projectData.folders.map((folder) => (
        <div key={folder.id} className="border py-4 px-4 flex flex-col gap-4">
          <Link href={`notes/${folder.id}`}>
            <p>{folder.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
