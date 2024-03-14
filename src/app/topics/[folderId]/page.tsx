import React from "react";
import TextNotesData from "@/components/TextNotesData";
import LinkNotesData from "@/components/LinkNotesData";
import ImageNotesData from "@/components/ImageNotesData";
import TopicNameBreadCrumb from "@/components/Breadcrumbs/TopicNameBreadCrumb";
import { getTopicName } from "@/lib/queries/topics";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { UpdateTopicName } from "@/components/UpdateTopicName";

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

      <div className="flex justify-between">
        <h1 className="text-4xl">{topicName.name}</h1>
        <UpdateTopicName />
      </div>

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
