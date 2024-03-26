"use client";
import React from "react";
import { Button } from "@material-tailwind/react";


const DeleteButton = () => {
    return (
        <Button
            color="red"
            ripple={true} placeholder={undefined}        >
            Delete Note
        </Button>
    );
};

export default DeleteButton;
