export default function Loading() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px'
    }}>
      <div style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        margin: '0 auto 20px',
        animation: 'spin 2s linear infinite'
      }}></div>
      <h2>블로그 목록을 불러오는 중...</h2>
      <p>잠시만 기다려주세요</p>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}