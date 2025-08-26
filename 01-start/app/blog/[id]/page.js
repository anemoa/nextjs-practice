import { notFound } from "next/navigation";

// 동적 메타데이터 생성
export async function generateMetadata({ params }) {
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    return {
      title: "글을 찾을 수 없습니다",
    };
  }

  const post = await response.json();

  return {
    title: `${post.title} - 내 블로그`,
    description: post.body.substring(0, 150) + "...",
    openGraph: {
      title: post.title,
      description: post.body.substring(0, 150) + "...",
      type: "article",
    },
  };
}

const getBlogPost = async (id) => {
  // 1.5초 딜레이 추가
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    return null; // 글이 없으면 null return
  }

  return response.json();
};

const BlogPost = async ({ params }) => {
  const { id } = params; // API에서 글 가져오기

  const post = await getBlogPost(id);
  // 글이 없으면 리턴
  if (!post) {
    notFound(); // Next.js 가 제공하는 특별 함수 404 페이지로 전환해줌
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <strong>글 번호:</strong> {post.id}
      </p>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
