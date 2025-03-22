"use client";

import { Button, Input } from "@material-tailwind/react";

const CreateTopicInput = () => {
  return (
    <>
      <Input
        name="topicName"
        label="Create Topic"
        color="black"
        variant="standard"
        crossOrigin={undefined}
        className="text-black! border-black!"
      />
      <Button placeholder={null} type="submit">
        Submit
      </Button>
    </>
  );
};

export default CreateTopicInput;
