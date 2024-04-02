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

    const form = e.currentTarget;
    const formData = new FormData(form);

    await deleteNoteAction({ noteId, folderId });
  };

  return (
    <form onSubmit={submitHandler}>
      <button>{folderId}</button>
    </form>
  );
};

export default DeleteButton;
