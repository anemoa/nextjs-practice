import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      style={{
        padding: "20px",
        borderBottom: "1px solid green",
        marginBottom: "30px",
      }}
    >
      <Link href="/" style={{ marginRight: "20px", borderBottom: '1px solid green', marginBottom: '30px'}}>
        홈으로
      </Link>
      <Link style={{ marginRight: "20px"}} href="/about"> about </Link>
      <Link style={{ marginRight: "20px"}} href="/contact"> contact </Link>
    </nav>

  );
};

export default Navigation;
