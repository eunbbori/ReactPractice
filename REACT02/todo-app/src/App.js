import React,{ useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'리액트의 기초 알아보기',
      checked: true,
    },
    {
      id:2,
      text:'컴포넌트 스타일링해보기',
      checked: true,
    },
    {
      id:3,
      text:'일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]); 

  const nextId = useRef(4); //id 값은 렌더링되는 정보가 아니기 때문에 useRef 사용 

  const onInsert = useCallback( //props로 전달해야 할 함수를 만들때는 useCallback을 사용해 함수 감싸는것 습관화
    text => {
      const todo = {
        id:nextId.current,
        text,
        checked:false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; 
    },
    [todos],
  )
  return(
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/> 
    <TodoList todos={todos}/>
  </TodoTemplate>
  );
};

export default App;
