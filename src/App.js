import './App.css';
import { TitleInput } from './components/TitleInput/TitleInput';
import { TodoLists } from './components/TodoLists/TodoLists';
import TypeOfCategory from './components/TypeOfCategory/TypeOfCategory';

function App() {
  return (
    <div className="App">
      <TitleInput/>
      <TypeOfCategory/>
      <TodoLists/>
    </div>
  );
}

export default App;
