import React from "react";
import TextNotesData from "@/components/TextNotesData";
import LinkNotesData from "@/components/LinkNotesData";
import ImageNotesData from "@/components/ImageNotesData";
import TopicNameBreadCrumb from "@/components/Breadcrumbs/TopicNameBreadCrumb";
import { getTopicName } from "@/lib/queries/topics";
import CreateNotes from "@/components/CreateNotes";
import UpdateTopicNameContainer from "@/components/UpdateTopicNameContainer";

const Page = async ({ params }: { params: { folderId: string } }) => {
  const topicName = await getTopicName(params.folderId);
  if (!topicName) {
    return;
  }

  return (
    <div>
      <TopicNameBreadCrumb
        folderId={params.folderId}
        currentTopic={topicName.name}
      />

      <div className="flex flex-col gap-4 my-4">
        <UpdateTopicNameContainer
          folderId={params.folderId}
          topicName={topicName.name}
        />
        <CreateNotes folderId={params.folderId} />
      </div>

      <TextNotesData topicId={params.folderId} />
      <LinkNotesData topicId={params.folderId} />
      <ImageNotesData topicId={params.folderId} />
    </div>
  );
};

export default Page;
