import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Post } from '../types/blog';
import { getAllPosts } from '../lib/api';

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        const recent = allPosts.slice(0, 3); // 최신 3개만
        setRecentPosts(recent);
      } catch (error) {
        console.error('에러:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
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
      <header className="hero">
        <h1 className="hero-title">내 블로그에 오신 것을 환영합니다!</h1>
        <p className="hero-subtitle">개발과 일상을 기록하는 공간입니다.</p>
      </header>

      <section className="recent-posts">
        <h2 className="section-title">최신 글</h2>
        
        {recentPosts.map((post) => (
          <div key={post.id} className="preview-card">
            <Link href={`/blog/${post.id}`}>
              <h3 className="preview-title">{post.title}</h3>
            </Link>
            <p className="preview-content">
              {post.body.slice(0, 100)}...
            </p>
          </div>
        ))}

        <div className="more-posts">
          <Link href="/blog">
            <button className="more-button">모든 글 보기 →</button>
          </Link>
        </div>
      </section>
    </div>
  );
}