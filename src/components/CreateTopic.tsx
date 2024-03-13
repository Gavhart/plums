import CreateTopicInput from "@/components/CreateTopicInput";
import { createTopic } from "@/lib/queries/topics";
import { redirect } from "next/navigation";

const CreateTopic = async () => {
  async function action(formData: FormData) {
    "use server";

    await createTopic(formData.get("topicName") as string);
    redirect("/topics");
  }

  return (
    <form className="flex" action={action}>
      <CreateTopicInput />
    </form>
  );
};

export default CreateTopic;
