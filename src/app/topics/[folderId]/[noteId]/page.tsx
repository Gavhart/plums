import React from "react";
import projectData from "@/data/data.json";
import NoteNameBreadcrumbs from "@/components/Breadcrumbs/NoteNameBreadcrumbs";
import TextContentData from "@/components/TextContentData";
import LinkContentData from "@/components/LinkContentData";
import ImageContentData from "@/components/ImageContentData";
import { getTopicName } from "@/lib/queries/topics";
import { getNoteContent } from "@/lib/queries/textNotes";

const Page = async ({
  params,
}: {
  params: { noteId: string; folderId: string };
}) => {
  // const folder = projectData.topics.find(
  //   (folder) => folder.id === params.folderId,
  // );
  // const folderName = folder ? folder.name : "";
  // const folderId = folder ? folder.id : "";
  // // get note names
  // const note = folder
  //   ? folder.notes.find((note) => note.id === params.noteId)
  //   : "";
  // const noteName = note ? note.title : "";
  // const noteId = note ? note.id : "";
  // console.log(noteName);
  const topicName = await getTopicName(params.folderId);
  if (!topicName) {
    return;
  }

  const noteContent = await getNoteContent(params.noteId);
  if (!noteContent) {
    return;
  }
  return (
    <div>
      <NoteNameBreadcrumbs
        folderName={topicName.name}
        folderId={params.folderId}
        noteName={noteContent.title}
        noteId={params.noteId}
      />
      <TextContentData noteId={params.noteId} />
      <LinkContentData noteId={params.noteId} />
      <ImageContentData noteId={params.noteId} />
    </div>
  );
};

export default Page;
