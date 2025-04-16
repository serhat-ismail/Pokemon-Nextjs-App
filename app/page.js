import Link from "next/link";

export default function Home() {
  return (
    <ol>
      <li><Link href="./preview">Preview</Link></li>
      <li><Link href="./arena">Arena</Link></li>
    </ol>
  );
}