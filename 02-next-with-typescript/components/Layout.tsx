import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            내 블로그
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                홈
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                블로그
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main>{children}</main>

      {/* 푸터 */}
      <footer className="footer">
        <p>&copy; 2025 내 블로그. All rights reserved.</p>
      </footer>
    </div>
  );
}
