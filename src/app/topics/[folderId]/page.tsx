import React from "react";
import TextNotesData from "@/components/TextNotesData";
import LinkNotesData from "@/components/LinkNotesData";
import ImageNotesData from "@/components/ImageNotesData";
import TopicNameBreadCrumb from "@/components/Breadcrumbs/TopicNameBreadCrumb";
import { getTopicName } from "@/lib/queries/topics";

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

      <p>+ text</p>
      <p>+ link</p>
      <p>+ image</p>

      <TextNotesData topicId={params.folderId} />
      <LinkNotesData topicId={params.folderId} />
      <ImageNotesData topicId={params.folderId} />
    </div>
  );
};

export default Page;
