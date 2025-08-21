import { notFound } from "next/navigation";

const getBlogPost = async (id) => {
  // 1.5초 딜레이 추가
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    return null; // 글이 없으면 null return
  }

  return res.json();
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
