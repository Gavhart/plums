"use client";

import React, { FormEvent } from "react";
import { deleteTopicAction } from "@/app/topics/[folderId]/[noteId]/action";
import { Button } from "@material-tailwind/react";

const DeleteTopic = ({ folderId }: { folderId: string }) => {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    await deleteTopicAction(folderId);
  };

  return (
    <form onSubmit={submitHandler}>
      {/*@ts-ignore*/}
      <Button type="submit" color="red">
        Delete Topic
      </Button>
    </form>
  );
};

export default DeleteTopic;
