import Image from 'next/image';
import React from 'react'

const BlogPost = ({params}) => {

	const {id} = params;
  return (
	<div>
		<h1>{id} 번째 글이다</h1>
		<Image src="/img01.jpg" alt={`${id}번 글 이미지`}
        width={200}
        height={400}/>
		<p>이것은 {id}번째 글의 내용이니까 알아보자</p>
		<p>파라미터로 받은 {id}</p>
	</div>
  )
}

export default BlogPost;