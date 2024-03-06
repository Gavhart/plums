import React from "react";
import { getNotes } from "@/lib/queries/textNotes";
import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

const TextNotesData = async ({ topicId }: { topicId: string }) => {
  const textNotes = await getNotes(topicId);
  return (
    <div>
      {textNotes.map((textNote) => (
        <div key={textNote.id}>
          <Link href={`/topics/${topicId}/${textNote.id}`}>
            <p className="border py-4 px-4 flex gap-4">
              <span>
                <DocumentTextIcon className="2-5 h-5" />
              </span>
              {textNote.title.toUpperCase()}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TextNotesData;
