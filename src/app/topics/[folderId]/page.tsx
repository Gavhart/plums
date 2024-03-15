import React from "react";
import TextNotesData from "@/components/TextNotesData";
import LinkNotesData from "@/components/LinkNotesData";
import ImageNotesData from "@/components/ImageNotesData";
import TopicNameBreadCrumb from "@/components/Breadcrumbs/TopicNameBreadCrumb";
import { getTopicName, updateTopic } from "@/lib/queries/topics";
import { UpdateTopicName } from "@/components/UpdateTopicName";
import { redirect } from "next/navigation";
import CreateTextNote from "@/components/CreateTextNote";
import { createTextNote } from "@/lib/queries/textNotes";
import { createLinkNote } from "@/lib/queries/linkNotes";
import CreateLinkNote from "@/components/CreateLinkNote";
import { createImageNote } from "@/lib/queries/imageNotes";
import CreateImageNote from "@/components/CreateImageNote";
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

      <UpdateTopicNameContainer
        folderId={params.folderId}
        topicName={topicName.name}
      />

      <CreateNotes folderId={params.folderId} />

      <TextNotesData topicId={params.folderId} />
      <LinkNotesData topicId={params.folderId} />
      <ImageNotesData topicId={params.folderId} />
    </div>
  );
};

export default Page;
