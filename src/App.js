import './App.css';
import { TitleInput } from './components/TitleInput/TitleInput';
import { TodoLists } from './components/TodoLists/TodoLists';
import TypeOfCategory from './components/TypeOfCategory/TypeOfCategory';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [category, setCategory] = useState('radio-1');

  const handleAddTodo = () => {
    if (currentTodo.trim() !== '') {
      setTodos([...todos, { text: currentTodo, category, isEditing: false }]);
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

  return (
    <div className="App">
      <TitleInput currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
      <TypeOfCategory setCategory={setCategory} handleAddTodo={handleAddTodo} />
      <TodoLists todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} handleSaveTodo={handleSaveTodo} />
    </div>
  );
}

export default App;
