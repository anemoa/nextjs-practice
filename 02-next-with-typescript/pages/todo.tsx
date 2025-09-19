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
  return (
    <Layout>
      <div className="container">
        <h1>할 일 관리하기</h1>
      </div>
    </Layout>
  );
};

export default TodoPage;
