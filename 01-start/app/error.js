'use client'

'use client'  // 에러 컴포넌트는 클라이언트 컴포넌트여야 함

export default function Error({ error, reset }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#ffe6e6',
      border: '1px solid #ff9999',
      borderRadius: '8px',
      margin: '20px'
    }}>
      <h1>🚫 문제가 발생했습니다</h1>
      <p>데이터를 불러오는 중 오류가 발생했어요.</p>
      <p style={{ color: '#666', fontSize: '14px' }}>
        에러 내용: {error.message}
      </p>
      <button 
        onClick={reset}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        다시 시도
      </button>
    </div>
  )
}