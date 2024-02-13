import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <p>Note {params.id}</p>
    </div>
  );
};

export default Page;
