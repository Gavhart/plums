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

const Page = async ({ params }: { params: { folderId: string } }) => {
  const topicName = await getTopicName(params.folderId);
  if (!topicName) {
    return;
  }

  async function updateTopicAction(formData: FormData) {
    "use server";

    await updateTopic(params.folderId, formData.get("topicName") as string);
    redirect(`/topics/${params.folderId}`);
  }

  async function createTextNoteAction(formData: FormData) {
    "use server";

    await createTextNote(
      params.folderId,
      formData.get("") as string,
      formData.get("") as string,
    );
    redirect(`/folder/${params.folderId}`);
  }

  return (
    <div>
      <TopicNameBreadCrumb
        folderId={params.folderId}
        currentTopic={topicName.name}
      />

      <div className="flex justify-between">
        <h1 className="text-4xl">{topicName.name}</h1>
        <form className="relative flex w-1/2" action={updateTopicAction}>
          <UpdateTopicName />
        </form>
      </div>

      <form action={createTextNoteAction}>
        <CreateTextNote />
      </form>
      <p>+ link</p>
      <p>+ image</p>

      <TextNotesData topicId={params.folderId} />
      <LinkNotesData topicId={params.folderId} />
      <ImageNotesData topicId={params.folderId} />
    </div>
  );
};

export default Page;
