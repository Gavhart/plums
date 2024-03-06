import projectData from "@/data/data.json";
import Link from "next/link";
import TopicsBreadcrumbs from "@/components/Breadcrumbs/TopicsBreadcrumbs";
import TopicsData from "@/components/TopicsData";

export default function FoldersPage() {
  return (
    <>
      <TopicsBreadcrumbs />
      <TopicsData />
    </>
  );
}
