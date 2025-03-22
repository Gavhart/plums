import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        className="flex justify-center text-4xl border rounded-sm mx-4 bg-custom-deep-plum text-custom-off-white mt-4"
        href="/topics/"
      >
        View all notes
      </Link>
    </div>
  );
}
