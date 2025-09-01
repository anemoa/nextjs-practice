import { Post } from '../types/blog';

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('데이터를 가져오는데 실패했습니다');
  }
  
  const posts: Post[] = await response.json();
  return posts;
}

export async function getPostById(id: string): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!response.ok) {
    throw new Error('글을 가져오는데 실패했습니다');
  }
  
  const post: Post = await response.json();
  return post;
}