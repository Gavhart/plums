import React from "react";
import NoteNameBreadcrumbs from "@/components/Breadcrumbs/NoteNameBreadcrumbs";
import TextContentData from "@/components/TextContentData";
import LinkContentData from "@/components/LinkContentData";
import ImageContentData from "@/components/ImageContentData";
import { getTopicName } from "@/lib/queries/topics";
import { getNoteContent } from "@/lib/queries/textNotes";
import { getTitle } from "@/lib/queries/getTitle";

const Page = async ({
  params,
}: {
  params: { noteId: string; folderId: string };
}) => {
  const topicName = await getTopicName(params.folderId);
  if (!topicName) {
    return;
  }

  const titles = await getTitle(params.noteId);
  if (!titles) {
    return;
  }
  return (
    <div>
      <NoteNameBreadcrumbs
        folderName={topicName.name}
        folderId={params.folderId}
        // noteName={noteContent.title}
        // noteName={titles.textTitle ? titles.textTitle : titles.linkTitle ? titles.linkTitle : titles.imageTitle ? titles.imageTitle : ""}
        // noteName={titles.textTitle[0]?.title || titles.imageTitle[0]?.title || titles.linkTitle[0]?.title || noteContent.title}
        noteName={"noteName"}
        noteId={params.noteId}
      />
      <TextContentData noteId={params.noteId} />
      <LinkContentData noteId={params.noteId} />
      <ImageContentData noteId={params.noteId} />
    </div>
  );
};

export default Page;
