import React from "react";
import CreateTextNote from "@/components/CreateTextNote";
import CreateLinkNote from "@/components/CreateLinkNote";
import CreateImageNote from "@/components/CreateImageNote";
import { createTextNote } from "@/lib/queries/textNotes";
import { redirect } from "next/navigation";
import { createLinkNote } from "@/lib/queries/linkNotes";
import { createImageNote } from "@/lib/queries/imageNotes";

const CreateNotes = ({ folderId }: { folderId: string }) => {
  async function createTextNoteAction(formData: FormData) {
    "use server";

    await createTextNote(
      folderId,
      formData.get("title") as string,
      formData.get("content") as string,
    );

    redirect(`/topics/${folderId}`);
  }

  async function createLinkNoteAction(formData: FormData) {
    "use server";

    await createLinkNote(
      folderId,
      formData.get("title") as string,
      formData.get("url") as string,
    );
    redirect(`/topics/${folderId}`);
  }

  async function createImageNoteAction(formData: FormData) {
    "use server";

    await createImageNote(
      folderId,
      formData.get("title") as string,
      formData.get("url") as string,
    );
    redirect(`/topics/${folderId}`);
  }
  return (
    <div className=" bg-custom-off-white">
      <form action={createTextNoteAction} className="border-b-2 border-black">
        <CreateTextNote />
      </form>

      <form action={createLinkNoteAction} className="border-b-2 border-black">
        <CreateLinkNote />
      </form>

      <form action={createImageNoteAction} className="border-b-2 border-black">
        <CreateImageNote />
      </form>
    </div>
  );
};

export default CreateNotes;
