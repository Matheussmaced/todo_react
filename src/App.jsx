import './App.css'
import { useState } from 'react'

function App() {

  const [value, setValue] = useState('');
  
  const eventChange = (event) => {
    return setValue(event.target.value);
  }

  const erase = () => {
    return setValue('');
  }
  const submit = () =>{
    console.log(value);
  }

  const enterKey = 13;
  const scapeKey = 27;


  const pressEnterAndEsc = (event) => {
     if (event.which === enterKey){
      return submit()
    } else if (event.which === scapeKey){
      return erase();
    }
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
      </section>
    </section>
  )
}

export default App
