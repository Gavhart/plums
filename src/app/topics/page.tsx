import TopicsBreadcrumbs from "@/components/Breadcrumbs/TopicsBreadcrumbs";
import TopicsData from "@/components/TopicsData";

export default function FoldersPage() {
  return (
    <>
      <TopicsBreadcrumbs />

      <p>+ topic</p>
      <p>+ tags</p>

      <TopicsData />
    </>
  );
}
