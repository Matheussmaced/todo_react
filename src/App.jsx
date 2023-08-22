import './App.css';
import { useState } from 'react';
import {MdDelete} from 'react-icons/md';

function App() {
  const [todos, setTodos] = useState([]); // valor inicial
  const [value, setValue] = useState('');

  const [removeTodo, setRemoveTodo] = useState('classInicial');

  const eventChange = (event) => {
    return setValue(event.target.value);
  }

  const erase = () => {
    return setValue('');
  }
  const submit = () =>{
    setTodos([...todos,{id: new Date().getTime(),
      title: value,
      checked: false,
    },
    ]);

    erase()
  }

  const enterKey = 13;
  const scapeKey = 27;


  const pressEnterAndEsc = (event) => {
     if (event.which === enterKey){
      submit()
      erase()
    } else if (event.which === scapeKey){
      return erase();
    }
  }

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => (
        obj.id === todo.id ? {...obj,checked: !obj.checked}
        : obj
      ))
      )
      console.log(todo)
  }
  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>Todo List</h1>
      </header>
      <section className='main'>
        <input
        type="text"
        className='new-todo'
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={eventChange}
        onKeyDown={pressEnterAndEsc}/>

        <ul className='todo-list'>
            { todos.map(todo=>(
              <li className={removeTodo} key={todo.id.toString()}>
                <div id="box">
                  <span onClick={() => onToggle(todo)}
                  className={todo.checked ? 'checked' : ''}
                  >
                    {todo.title}</span>
                  <button className='remove'>
                    <MdDelete size={20}/>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>

    </section>
  )
}

export default App
