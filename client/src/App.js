import React, { useState } from 'react';
import './App.css';
import { useRoutes } from './Hooks/useRoutes';
import NavBar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { authContext } from './components/Contexts';
import logo from './logo.svg';

function App() {
  const [isAuth, setAuth] = useState(false);
  const routes = useRoutes();

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={{ isAuth: isAuth, setAuth: setAuth }}>
          <div className='App-header'>
            <img src={logo} className="App-logo" alt="logo" />
            <div className='header-right'>
              <NavBar/> 
            </div>
          </div>
          <div className='Content'>
            {routes}
          </div>
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
