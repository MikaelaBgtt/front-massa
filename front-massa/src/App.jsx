import { Route, Routes } from "react-router-dom";
import Nav from '../src/components/Nav';
import Home from '../src/pages/Home';
import './global.css';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
            <Route index element={<Home />} />
            <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
