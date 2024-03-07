import { getTopics } from "@/lib/queries/topics";
import Link from "next/link";

interface Topic {
  id: string;
  name: string;
}

const TopicsData = async () => {
  const topics = await getTopics();
  return (
    <>
      {topics.map((topic: Topic) => (
        <div key={topic.id} className="border py-4 px-4 flex flex-col gap-4">
          <Link href={`/topics/${topic.id}`}>
            <p>{topic.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TopicsData;
