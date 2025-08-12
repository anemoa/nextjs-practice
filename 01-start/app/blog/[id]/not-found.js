import Link from "next/link";

const NotFound = () => {
  return (
	<div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>😞 글을 찾을 수 없습니다</h1>
      <p>요청하신 블로그 글이 존재하지 않습니다.</p>
      <Link href="/blog" style={{ 
        color: 'blue', 
        textDecoration: 'underline',
        marginTop: '20px',
        display: 'inline-block'
      }}>
        블로그 목록으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFound;