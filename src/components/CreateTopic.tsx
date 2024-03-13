import React from "react";
import CreateTopicInput from "@/components/CreateTopicInput";
import { createTopic } from "@/lib/queries/topics";

const CreateTopic = async () => {
  async function action(formData: FormData) {
    "use server";

    await createTopic(formData.get("topicName") as string);
  }

  return (
    <form className="flex" action={action}>
      <CreateTopicInput />
    </form>
  );
};

export default CreateTopic;
