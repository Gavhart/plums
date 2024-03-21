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

export async function createTopic(name: string) {
  return db.topic.create({
    data: { name, createdAt: new Date().toISOString() },
  });
}

export async function updateNote(folderId: string, name: string) {
  return db.topic.update({
    where: {
      id: folderId,
    },
    data: {
      name,
    },
  });
}
