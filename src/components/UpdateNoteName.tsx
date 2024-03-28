"use client";

import React from "react";
import { Button, Input } from "@material-tailwind/react";

export function UpdateNoteName() {
  const [text, setText] = React.useState("");
  const onChange = ({ target }: { target: any }) => setText(target.value);

  return (
    <>
      <Input
        type="text"
        value={text}
        onChange={onChange}
        className="pr-20 !border-black !text-black"
        label="Update Note Name"
        color="black"
        variant="standard"
        crossOrigin={null}
        name="noteName"
      />
      <Button
        size="sm"
        color={"black"}
        disabled={!text}
        className="!absolute right-1 top-1 rounded"
        placeholder={null}
        type="submit"
      >
        Update
      </Button>
    </>
  );
}
