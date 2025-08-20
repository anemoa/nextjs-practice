export default function Loading() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        height: '40px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px',
        marginBottom: '20px',
        animation: 'pulse 1.5s ease-in-out infinite'
      }}></div>
      
      <div style={{
        height: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px',
        marginBottom: '10px',
        width: '30%',
        animation: 'pulse 1.5s ease-in-out infinite'
      }}></div>
      
      <div style={{
        height: '200px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px',
        marginBottom: '20px',
        animation: 'pulse 1.5s ease-in-out infinite'
      }}></div>
      
      <p>글을 불러오는 중...</p>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}