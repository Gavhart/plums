import projectData from "@/data/data.json";
import Link from "next/link";
import FoldersBreadcrumbs from "@/components/Breadcrumbs/FoldersBreadcrumbs";
import TopicsData from "@/components/TopicsData";

export default function FoldersPage() {
  return (
    <>
      <FoldersBreadcrumbs />
      <TopicsData />
    </>
  );
}
