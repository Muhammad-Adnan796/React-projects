import logo from './logo.svg';
import './App.css';
import { Create } from './components/Create';
import { Read } from './components/Read';
import { Route, Routes } from 'react-router-dom';
import { Edit } from './components/Edit';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Read/>}/>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/edit' element={<Edit/>}/>
    </Routes>
    </div>
  );
}

export default App;
