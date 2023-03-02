import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css'
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='nav-main-container'>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" />
              <Route path="teams">
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
