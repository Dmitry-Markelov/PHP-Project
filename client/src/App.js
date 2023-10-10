import React, { useState } from 'react';
import './App.css';
import { useRoutes } from './Hooks/useRoutes';
import NavBar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { authContext } from './components/Contexts';
import logo from './logo.svg';
import Server from './modules/Server';
import { HOST } from './config';

export const ServerContext = React.createContext(null);

function App() {
  const [isAuth, setAuth] = useState(false);
  const routes = useRoutes();
  const server = new Server(HOST);

  return (
    <div className="App">
      <BrowserRouter>
        <ServerContext.Provider value={server}>
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
        </ServerContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
