import React, { useEffect, useState } from 'react';
import './App.css';
import { useRoutes } from './Hooks/useRoutes';
import NavBar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
import { HOST } from './config';
import Server from './modules/Server/Server';
import { Store } from './modules/Store/Store';
import { getToken, removeToken } from './Hooks/useToken';

export const StoreContext = React.createContext<Store>(null!);
export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
  const routes = useRoutes();
  const store = new Store();
  const server = new Server(HOST, store);
  const token = getToken();
  console.log(localStorage)

  const handleAutoLogin = async () => {
    console.log('sad')
    const result = await server.autoLogin();
    if (result) {
      store.setAuth()
    } else {
      removeToken();
    }
  }
  
  useEffect(() => {
    if (token) {
        handleAutoLogin()
    }
}, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <ServerContext.Provider value={server}>
            <div className='App-header'>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <div className='header-right'>
                <NavBar />
              </div>
            </div>
            <div className='Content'>
              {routes}
            </div>
          </ServerContext.Provider>
        </StoreContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
