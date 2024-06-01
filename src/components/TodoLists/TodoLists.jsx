import React, { useState } from 'react';
import '../TodoLists/todolists.css';

export const TodoLists = ({ todos, handleDeleteTodo, handleEditTodo, handleSaveTodo, handleRadioChange }) => {
  const [editText, setEditText] = useState('');

  const getRadioClass = (category) => {
    switch (category) {
      case 'business':
        return 'business-radio';
      case 'personal':
        return 'personal-radio';
      default:
        return '';
    }
  };

  return (
    <div className="todo__lists">
      <p className="create__todo-text">TODO LIST</p>
      {todos.map((todo, index) => (
        <div key={index} className="form_radio_lists">
          <div className="labels">
            <input
              id={`todo-${index}`}
              type="checkbox"  
              className={getRadioClass(todo.category)}
              name={`radio-${index}`}
              checked={todo.checked}
              onChange={() => handleRadioChange(index)}
            />
            {todo.isEditing ? (
              <input
                type="text"
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
              />
            ) : (
              <label htmlFor={`todo-${index}`} className={`labels_line ${todo.checked ? 'checked-task' : ''}`}>
                {todo.text}
              </label>
            )}
          </div>
          <div className="form-radio-btn">
            {todo.isEditing ? (
              <button className="save-btn" onClick={() => handleSaveTodo(index, editText)}>
                Save
              </button>
            ) : (
              <button
                className="edit-btn"
                onClick={() => {
                  handleEditTodo(index);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
            )}
            <button className="delete-btn" onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
