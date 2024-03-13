import React from "react";
import Image from "next/image";
import { getImageContent } from "@/lib/queries/imageNotes";

const ImageContentData = async ({ noteId }: { noteId: string }) => {
  const imageContent = await getImageContent(noteId);
  if (!imageContent) {
    return;
  }
  return (
    <div>
      <Image src={imageContent.url} alt={imageContent.title} />
    </div>
  );
};

export default ImageContentData;
