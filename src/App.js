import "./App.css"
import TodoStyle from "./compsStyle/TodoStyle.module.css"
import TodoApp from './components-todo/TodoApp';

function App() {
  return (
    <div className={TodoStyle.App}>
      <TodoApp/>
    </div>
  );
}

export default App;
