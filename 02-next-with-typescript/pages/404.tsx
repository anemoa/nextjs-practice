import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="container">
        <div className="error-page">
          <div className="error-content">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">페이지를 찾을 수 없습니다</h2>
            <p className="error-description">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>
            
            <div className="error-actions">
              <Link href="/">
                <button className="error-button primary">
                  홈으로 돌아가기
                </button>
              </Link>
              
              <Link href="/blog">
                <button className="error-button secondary">
                  블로그 보기
                </button>
              </Link>
            </div>
          </div>
          
          <div className="error-illustration">
            <div className="sad-face">😢</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}