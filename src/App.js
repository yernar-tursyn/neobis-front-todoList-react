import './App.css';
import { TitleInput } from './components/TitleInput/TitleInput';
import { TodoLists } from './components/TodoLists/TodoLists';
import TypeOfCategory from './components/TypeOfCategory/TypeOfCategory';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [currentTodo, setCurrentTodo] = useState('');
  const [category, setCategory] = useState('business');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (currentTodo.trim() !== '') {
      setTodos([...todos, { text: currentTodo, category, isEditing: false, checked: false }]);
      setCurrentTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, isEditing: !todo.isEditing } : todo));
    setTodos(newTodos);
  };

  const handleSaveTodo = (index, newText) => {
    if (newText.trim() !== '') {
      const newTodos = todos.map((todo, i) => (i === index ? { ...todo, text: newText, isEditing: false } : todo));
      setTodos(newTodos);
    }
  };

  const handleRadioChange = (index) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, checked: !todo.checked } : todo));
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TitleInput currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} handleAddTodo={handleAddTodo} />
      <TypeOfCategory setCategory={setCategory} handleAddTodo={handleAddTodo} />
      <TodoLists todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} handleSaveTodo={handleSaveTodo} handleRadioChange={handleRadioChange} />
    </div>
  );
}

export default App;
