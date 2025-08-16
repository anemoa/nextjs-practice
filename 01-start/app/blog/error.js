"use client"

export default function BlogError({ error, reset }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1>📝 블로그를 불러올 수 없습니다</h1>
      <p>블로그 데이터를 가져오는 중 문제가 발생했어요.</p>
      <p>잠시 후 다시 시도해주세요.</p>
      <button
        onClick={reset}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        블로그 다시 불러오기
      </button>
    </div>
  );
}
