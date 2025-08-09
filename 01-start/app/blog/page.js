import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>blog page!!!</h1>
      <ul>
        <li>
          <Link href="/blog/1">1번 글</Link>
          <Image
            src="/img01.jpg"
            alt={`1번 글 이미지`}
            width={100}
            height={300}
          />
        </li>
        <li>
          <Link href="/blog/2">2번 글</Link>
        </li>
        <li>
          <Link href="/blog/3">3번 글</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
