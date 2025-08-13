import Image from "next/image";
import Link from "next/link";

const getBlogPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // 10개 가져오기
  return posts.slice(0, 10);
};

const Blog = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <div>
      <h1>blog page!!!</h1>
      <ul>
        {blogPosts.map(({ id, title }) => {
          return (
            <li key={id} style={{ marginBottom: "10px" }}>
              <Link href={`/blog/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
