"use client";

import React, { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";

const CreateTextNote = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col gap-8 py-4">
      <Button onClick={handleOpen} variant="gradient" placeholder={undefined}>
        Create Text Note
      </Button>
      <div hidden={!open} className={`${open && "flex flex-col gap-8 "}`}>
        <Input name="title" label="Title" crossOrigin={undefined} />
        <Textarea name="content" label="Your notes" rows={16} />
        <Button
          type="submit"
          color="green"
          placeholder={undefined}
          onClick={handleOpen}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateTextNote;
