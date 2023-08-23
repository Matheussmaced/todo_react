import {useState} from 'react'
import PropTypes from 'prop-types';
import './styles.css'

const NewTodo = ({ onNewTodo }) =>{
    const [value, setValue] = useState('');

    const eventChange = (event) => {
        return setValue(event.target.value);
      }
    
      const erase = () => {
        return setValue('');
      }
      const submit = () =>{
        if(onNewTodo){
            onNewTodo(value);
            erase()
        }
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

    return(
        <>
        <input
        type="text"
        className='new-todo'
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={eventChange}
        onKeyDown={pressEnterAndEsc}
        />
        </>
    )
}

NewTodo.prototype = {
    onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo