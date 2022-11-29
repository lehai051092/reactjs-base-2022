import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoListFeature.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
  onTodoRemove: PropTypes.func,
};

TodoListFeature.defaultProps = {
  todoList: [],
  onTodoClick: null,
  onTodoRemove: null,
}

function TodoListFeature({todoList, onTodoClick, onTodoRemove}) {
  const handleTodoClick = (todo) => {
    if (!onTodoClick) return;

    onTodoClick(todo);
  }

  const handleTodoRemove = (todo) => {
    if (!onTodoRemove) return;

    onTodoRemove(todo);
  }

  return (
    <ul className={'todo-list'}>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className={
            classnames({
              'todo-item': true,
              completed: todo.status === 'completed',
            })
          }
        >
          <span onClick={() => handleTodoClick(todo)}>{todo.title}</span>
          <button onClick={() => handleTodoRemove(todo)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoListFeature;