import { db } from "../db";

export async function getTopics() {
  return db.topic.findMany();
}

export async function getTopicName(folderId: string) {
  return db.topic.findFirst({
    where: {
      id: folderId,
    },
  });
}
