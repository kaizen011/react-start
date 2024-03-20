import { v4 as uuidv4 } from 'uuid';

const todos = [
    { task: "mow the yard", id: uuidv4() },
    { task: "Work on Odin Projects", id: uuidv4() },
    { task: "feed the cat", id: uuidv4() },
  ];
  
  function TodoList() {
    return (
      <ul>
        {todos.map((todo) => (
            
          <li key={todo.id}>{todo.task} + Here is the ID: {todo.id}</li>
        ))}
      </ul>
    );
  }

export default TodoList;