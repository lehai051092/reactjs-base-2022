import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoListFeature from "./components/TodoList";
import FilterStatus from "./components/FilterStatus";
import TodoForm from "./components/TodoForm";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: 'Learn Git',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Learn HTML',
      status: 'new',
    },
    {
      id: 3,
      title: 'Learn CSS',
      status: 'new',
    }
  ];

  const [getTodoList, setTodoList] = useState(todoList);
  const [getFilterStatus, setFilterStatus] = useState('all');

  const handleTodoClick = (todo) => {
    // clone new todo list
    const newTodoList = [...getTodoList];

    // update new todo
    const newTodo = newTodoList.find(newTodo => newTodo.id === todo.id);
    if (newTodo) {
      newTodo.status = todo.status === 'new' ? 'completed' : 'new';
    }

    // save new todo
    setTodoList(newTodoList);
  }

  const handleFilterStatus = (value) => {
    setFilterStatus(value);
  }

  const getRenderTodoList = getTodoList.filter((todo) => getFilterStatus === 'all' || getFilterStatus === todo.status);

  const handleFormSubmit = (value) => {
    const newTodoList = [...getTodoList];
    const newTodo = {
      id: Date.now(),
      title: value,
      status: 'new',
    };

    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const handleTodoRemove = (todo) => {
    const newTodoList = [...getTodoList];
    const index = newTodoList.findIndex(newTodo => newTodo.id === todo.id);

    if (index >= 0) {
      newTodoList.splice(index, 1);
    }

    setTodoList(newTodoList);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm onFormSubmit={handleFormSubmit}/>
      <FilterStatus onFilterChange={handleFilterStatus}/>
      <TodoListFeature todoList={getRenderTodoList} onTodoClick={handleTodoClick} onTodoRemove={handleTodoRemove}/>
    </div>
  );
}

export default TodoFeature;