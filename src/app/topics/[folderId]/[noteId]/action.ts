"use server"

import {deleteTopic} from "@/lib/queries/topics";
import {redirect} from "next/navigation";

export async function deleteTopicAction(folderId:string) {
    await deleteTopic(folderId)
    redirect("/topics")
}
