"use client";

import React from "react";
import { Input, Textarea } from "@material-tailwind/react";

const CreateTextNote = () => {
  return (
    <div className="flex flex-col gap-8 py-4 bg-custom-off-white">
      <Input
        name="title"
        label="Title"
        variant="standard"
        crossOrigin={undefined}
      />
      <Textarea
        name="content"
        label="Your notes"
        variant="standard"
        rows={16}
      />
    </div>
  );
};

export default CreateTextNote;
