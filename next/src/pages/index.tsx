import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>hello</h1>
      <button>Log in</button>
      <Link href={"/dashboard"} className="bg-red-500 p-5 rounded-md">
        Dashboard page
      </Link>
    </main>
  );
}
