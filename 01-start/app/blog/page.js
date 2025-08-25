import Link from "next/link";

// 페이지별 메타데이터
export const metadata = {
  title: "블로그 목록 - 내 블로그",
  description: "다양한 개발 관련 글들을 확인해보세요.",
  openGraph: {
    title: "블로그 목록",
    description: "개발 블로그 글 목록",
  },
};


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
