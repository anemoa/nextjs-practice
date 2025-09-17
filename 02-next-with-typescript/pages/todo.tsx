import Layout from '@/components/Layout';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoPage = () => {
  return (
	<Layout>
		<div className='container'>
			<h1>할 일 관리하기</h1>
		</div>
	</Layout>
  )
}

export default TodoPage;