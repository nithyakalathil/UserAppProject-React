import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adddetials from './components/Adddetials';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';

function App() {
  return (
    <div >
      
      
<BrowserRouter>
<Routes>
  <Route path='/' element={<Adddetials/>}/>
  <Route path='/s' element={<Search/>}/>
  <Route path='/d' element={<Delete/>}/>
  <Route path='/v' element={<Viewall/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
