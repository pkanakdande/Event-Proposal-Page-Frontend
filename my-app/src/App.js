
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendorhome from './components/Vendorhome';



function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vendorhome/>} />
        
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
