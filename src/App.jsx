import { useState } from 'react';

import './App.css';
import NewTodo from './components/NewTodo/NewTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [todos, setTodos] = useState([]); // valor inicial

  const onNewTodo = (value) => {
    setTodos([...todos,{id: new Date().getTime(),
      title: value,
      checked: false,
    },
    ]);
  }

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => (
        obj.id === todo.id ? {...obj,checked: !obj.checked}
        : obj
      )))
  }

  const remove = (todo) => {
    console.log('remove', todo)
    setTodos(todos.filter((obj) => obj.id !== todo.id)); // para não retornar o todo desejado
  }

  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>Todo List</h1>
      </header>
      <section className='main'>
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} remove={remove} />
      </section>

    </section>
  )
}

export default App
