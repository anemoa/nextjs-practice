import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Post } from "../../types/blog";
import { getPostById } from "../../lib/api";
import Layout from "@/components/Layout";

const PostDetail = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id && typeof id === "string") {
      const fetchPost = async () => {
        try {
          const data = await getPostById(id);
          setPost(data);
        } catch (error) {
          console.error("에러:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">로딩 중...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container">
        <div className="loading">글을 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container">
        <button onClick={() => router.back()} className="back-button">
          ← 뒤로 가기
        </button>
        <article className="post-detail">
          <h1 className="detail-title">{post.title}</h1>
          <div className="detail-meta">글 번호: {post.id}</div>
          <div className="detail-content">{post.body}</div>
        </article>
      </div>
    </Layout>
  );
};

export default PostDetail;
