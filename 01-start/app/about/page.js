import Link from "next/link";

const About = () => {
  return (
	<div>
		<h1>About 페이지</h1>
		<p>여긴 어바웃 페이지다</p>
		<Link href="/">홈 가기</Link>
	</div>
  )
}

export default About;