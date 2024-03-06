import projectData from "@/data/data.json";
import Link from "next/link";
import FoldersBreadcrumbs from "@/components/Breadcrumbs/FoldersBreadcrumbs";

export default function FoldersPage() {
  return (
    <>
      <FoldersBreadcrumbs />
      {projectData.topics.map((folder) => (
        <div key={folder.id} className="border py-4 px-4 flex flex-col gap-4">
          <Link href={`/topics/${folder.id}`}>
            <p>{folder.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
