"use client";

import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

const CreateImageNote = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col gap-8 py-4">
      {/* @ts-ignore */}
      <Button onClick={handleOpen} variant="gradient" placeholder={undefined}>
        Create Image Note
      </Button>
      <div hidden={!open} className={`${open && "flex flex-col gap-8 "}`}>
        {/* @ts-ignore */}
        <Input name="title" label="Title" crossOrigin={undefined} />
        {/* @ts-ignore */}
        <Input name="url" label="Url" crossOrigin={undefined} />
        {/* @ts-ignore */}
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

export default CreateImageNote;
