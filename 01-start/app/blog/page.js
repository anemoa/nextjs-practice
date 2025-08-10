import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>blog page!!!</h1>
      <ul>
        {blogPosts.map(({ id, title, image }) => {
          return (
            <li key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <Image
                src={image}
                alt={`${title} 이미지`}
                width={100}
                height={300}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
