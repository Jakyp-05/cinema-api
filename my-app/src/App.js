import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ItemUser from './Pages/ItemUser';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/user/:id' element={<ItemUser />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
