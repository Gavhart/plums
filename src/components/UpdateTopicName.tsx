"use client";

import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function UpdateTopicName() {
  const [text, setText] = React.useState("");
  const onChange = ({ target }: { target: any }) => setText(target.value);

  return (
    <div className="relative flex w-1/2">
      <Input
        type="text"
        value={text}
        onChange={onChange}
        className="pr-20 !border-black !text-black"
        label="Update Note Name"
        color="black"
        variant="standard"
        crossOrigin={null}
      />
      <Button
        size="sm"
        color={"black"}
        disabled={!text}
        className="!absolute right-1 top-1 rounded"
        placeholder={null}
      >
        Update
      </Button>
    </div>
  );
}
