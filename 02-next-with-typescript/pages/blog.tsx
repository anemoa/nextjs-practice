// pages/blog.tsx
import { useState, useEffect } from "react";
import { Post } from "../types/blog";
import { getAllPosts } from "../lib/api";
import Link from "next/link";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data.slice(0, 10)); // 처음 10개만
      } catch (error) {
        console.error("에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">내 블로그</h1>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <Link href={`/blog/${post.id}`}>
            <h2 className="post-title">{post.title}</h2>
          </Link>
          <p className="post-content">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
