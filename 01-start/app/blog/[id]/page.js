import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import React from "react";

const BlogPost = ({ params }) => {
  const { id } = params;

  // id와 일치하는 글 찾기
  const post = blogPosts.find(post => post.id === parseInt(id));

  // 글이 없으면 리턴
  if(!post){
	return <div>글이 없어요!</div>
  }

  // 구조분해
  const {title, content, image, date} = post;

  return (
    <div>
      <h1>{title}</h1>
	  <p>{content}</p>
      <Image
        src={image}
        alt={`${id}번 글 이미지`}
        width={200}
        height={400}
      />
		<p>{date}</p>
    </div>
  );
};

export default BlogPost;
