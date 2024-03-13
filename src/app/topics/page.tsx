import TopicsBreadcrumbs from "@/components/Breadcrumbs/TopicsBreadcrumbs";
import TopicsData from "@/components/TopicsData";
import CreateTopic from "@/components/CreateTopic";

export default function FoldersPage() {
  return (
    <>
        <div className="flex flex-col gap-8">
            <TopicsBreadcrumbs />
            <CreateTopic />
            <TopicsData />
        </div>

    </>
  );
}
