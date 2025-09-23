import Layout from "@/components/Layout";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const addTodo = () => {
    if (inputText.trim() === '') return;
    
    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  return (
    <Layout>
      <div className="container">
        <h1>할 일 관리하기</h1>

        <div className="todo-input-section">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
			onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="할 일을 입력하세요"
            className="todo-input"
          />
          <button  onClick={addTodo} className="add-button">추가</button>
        </div>
      </div>
    </Layout>
  );
};

export default TodoPage;
