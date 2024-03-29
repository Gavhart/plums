import Image from "next/image";

interface CardProps {
  image?: string;
}

export default function Card({ image }: CardProps) {
  return (
    <>
      <div className="w-auto h-40 bg-gray-100 mx-auto">
        {image && <Image src={image} alt="" width={100} height={100} />}
      </div>
    </>
  );
}
