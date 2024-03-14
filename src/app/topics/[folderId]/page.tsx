import React from "react";
import TextNotesData from "@/components/TextNotesData";
import LinkNotesData from "@/components/LinkNotesData";
import ImageNotesData from "@/components/ImageNotesData";
import TopicNameBreadCrumb from "@/components/Breadcrumbs/TopicNameBreadCrumb";
import { getTopicName, updateTopic } from "@/lib/queries/topics";
import { UpdateTopicName } from "@/components/UpdateTopicName";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { folderId: string } }) => {
  const topicName = await getTopicName(params.folderId);
  if (!topicName) {
    return;
  }

  async function action(formData: FormData) {
    "use server";

    await updateTopic(params.folderId, formData.get("topicName") as string);
    redirect(`/topics/${params.folderId}`);
  }

  return (
    <div>
      <TopicNameBreadCrumb
        folderId={params.folderId}
        currentTopic={topicName.name}
      />

      <div className="flex justify-between">
        <h1 className="text-4xl">{topicName.name}</h1>
        <form className="relative flex w-1/2" action={action}>
          <UpdateTopicName />
        </form>
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
