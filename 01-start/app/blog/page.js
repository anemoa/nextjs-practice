import Link from "next/link";

const getBlogPosts = async () => {
  // 2초 딜레이 추가 (로딩 확인용)
  await new Promise((resolve) => setTimeout(resolve, 2000));

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
