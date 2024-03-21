import React from "react";
import NoteNameBreadcrumbs from "@/components/Breadcrumbs/NoteNameBreadcrumbs";
import TextContentData from "@/components/TextContentData";
import LinkContentData from "@/components/LinkContentData";
import ImageContentData from "@/components/ImageContentData";
import { getTopicName } from "@/lib/queries/topics";
import { getTitle } from "@/lib/queries/getTitle";
import UpdateNoteNameContainer from "@/components/UpdateNoteNameContainer";

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

  const allTitles = [
    ...titles.textTitle,
    ...titles.imageTitle,
    ...titles.linkTitle,
  ];

  return (
    <div>
      <NoteNameBreadcrumbs
        folderName={topicName.name}
        folderId={params.folderId}
        noteName={allTitles[0].title}
        noteId={params.noteId}
      />

      <UpdateNoteNameContainer
        folderId={params.folderId}
        noteId={params.noteId}
        topicName={topicName.name}
      />

      <TextContentData noteId={params.noteId} />
      <LinkContentData noteId={params.noteId} />
      <ImageContentData noteId={params.noteId} />
    </div>
  );
};

export default Page;
