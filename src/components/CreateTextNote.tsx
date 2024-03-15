"use client";

import React from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";

const CreateTextNote = () => {
  return (
    <div className="flex flex-col gap-8 py-4 bg-custom-off-white">
      <Input name="title" label="Title" crossOrigin={undefined} />
      <Textarea name="content" label="Your notes" rows={16} />
      <Button type="submit" placeholder={undefined}>
        Submit
      </Button>
    </div>
  );
};

export default CreateTextNote;
