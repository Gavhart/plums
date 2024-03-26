import React from "react";
import { UpdateNoteName } from "@/components/UpdateNoteName";
import { redirect } from "next/navigation";
import { updateNoteName } from "@/lib/queries/notes";

const UpdateTopicNameContainer = ({
  folderId,
  noteId,
}: {
  folderId: string;
  noteId: string;
}) => {
  async function updateNameAction(formData: FormData) {
    "use server";

    await updateNoteName(noteId, formData.get("noteName") as string);
    redirect(`/topics/${folderId}/${noteId}`);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <form className="relative flex w-1/2" action={updateNameAction}>
        <UpdateNoteName />
      </form>
    </div>
  );
};

export default UpdateTopicNameContainer;
