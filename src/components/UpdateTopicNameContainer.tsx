import React from "react";
import { UpdateTopicName } from "@/components/UpdateTopicName";
import { updateTopic } from "@/lib/queries/topics";
import { redirect } from "next/navigation";

const UpdateTopicNameContainer = ({
  folderId,
  topicName,
}: {
  folderId: string;
  topicName: string;
}) => {
  async function updateTopicAction(formData: FormData) {
    "use server";

    await updateTopic(folderId, formData.get("topicName") as string);
    redirect(`/topics/${folderId}`);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <h1 className="text-4xl">{topicName}</h1>
      <form className="relative flex w-1/2" action={updateTopicAction}>
        <UpdateTopicName />
      </form>
    </div>
  );
};

export default UpdateTopicNameContainer;
