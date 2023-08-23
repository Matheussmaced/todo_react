import {MdDelete} from 'react-icons/md';
import PropTypes from 'prop-types'
import './styles.css'
const TodoList = ( {todos, onToggle, remove} ) => {

    return(
        <>
            <ul className='todo-list'>
            { todos.map(todo=>(
              <li key={todo.id.toString()}>
                <div id="box">
                  <span onClick={() => onToggle(todo) && onToggle(todo)}
                  className={todo.checked ? 'checked' : ''}
                  >
                    {todo.title}</span>
                  <button className='remove'
                  onClick={() => remove(todo) && remove(todo)}
                  >
                    <MdDelete size={20}/>
                  </button>
                </div>
              </li>
            ))}
        </ul>
        </>
    )
}

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    ontoggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TodoList
