import React, { useState } from 'react';
import '../TodoLists/todolists.css';

export const TodoLists = ({ todos, handleDeleteTodo, handleEditTodo, handleSaveTodo }) => {
  const [editText, setEditText] = useState('');

  return (
    <div className="todo__lists">
      <p className="create__todo-text">СПИСОК ДЕЛ</p>
      {todos.map((todo, index) => (
        <div key={index} className="form_radio_lists">
          <div className="labels">
            <input
              id={`todo-${index}`}
              type="radio"
              name="radio"
              onClick={(e) => {
                e.target.checked = !e.target.checked;
                e.target.nextSibling.style.color = e.target.checked ? 'grey' : '';
                e.target.nextSibling.style.textDecoration = e.target.checked ? 'line-through' : '';
              }}
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
              <label htmlFor={`todo-${index}`} className="labels_line">
                {todo.text}
              </label>
            )}
          </div>
          <div className="form-radio-btn">
            {todo.isEditing ? (
              <button className="save-btn" onClick={() => handleSaveTodo(index, editText)}>
                Сохранить
              </button>
            ) : (
              <button
                className="edit-btn"
                onClick={() => {
                  handleEditTodo(index);
                  setEditText(todo.text);
                }}
              >
                Редактировать
              </button>
            )}
            <button className="delete-btn" onClick={() => handleDeleteTodo(index)}>
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
