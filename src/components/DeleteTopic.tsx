"use client"

import React, {FormEvent} from "react";
import {deleteTopicAction} from "@/app/topics/[folderId]/[noteId]/action";

const DeleteTopic = ({folderId}: {folderId:string}) => {
    const submitHandler = async (e:FormEvent) => {
        e.preventDefault()

        await deleteTopicAction(folderId)
    }

    return (
        <form onSubmit={submitHandler} >
            <button type="submit" className="p-2 bg-red-900">
                Submit
            </button>
        </form>
    );
};

export default DeleteTopic;
