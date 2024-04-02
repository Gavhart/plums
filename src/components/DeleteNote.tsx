"use client";

import React, { FormEvent } from "react";
import { deleteNoteAction } from "@/app/topics/[folderId]/[noteId]/action";
import { Button } from "@material-tailwind/react";

const DeleteButton = ({
  folderId,
  noteId,
}: {
  folderId: string;
  noteId: string;
}) => {
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await deleteNoteAction({ noteId, folderId });
  };

  return (
    <form onSubmit={submitHandler}>
      {/*@ts-ignore*/}
      <Button type="submit" color="red">
        Delete note
      </Button>
    </form>
  );
};

export default DeleteButton;
