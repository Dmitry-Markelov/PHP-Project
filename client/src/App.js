import React, { useState } from 'react';
import './App.css';
import { useRoutes } from './Hooks/useRoutes';
import NavBar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { authContext } from './components/Contexts';

function App() {
  const [isAuth, setAuth] = useState(false);
  const routes = useRoutes();

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={{ isAuth: isAuth, setAuth: setAuth }}>
          <NavBar/> 
          {routes}
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
