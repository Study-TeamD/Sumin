import { useState } from 'react';
import './App.css'; 

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <h1>To do list</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="입력하세요" onChange={onChange} value={toDo} />
        <button>등록하기</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
