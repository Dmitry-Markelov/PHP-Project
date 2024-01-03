  import React, { useState } from 'react';
  import './App.css';
  import { useRoutes } from './Hooks/useRoutes';
  import NavBar from './components/Navbar';
  import { BrowserRouter } from 'react-router-dom';
  // import { authContext } from './components/Contexts';
  // import logo from './logo.svg';
  // import Server from './modules/Server/Server';
  import { HOST } from './config';
  import Server from './modules/Server/Server';

  export const ServerContext = React.createContext<Server>(null!);

  const App: React.FC = () => {
    const [isAuth, setAuth] = useState(false);
    const routes = useRoutes();
    const server = new Server(HOST);

    return (
      <div className="App">
        <BrowserRouter>
          <ServerContext.Provider value={server}>
            {/* <authContext.Provider value={{ isAuth, setAuth }}> */}
              <div className='App-header'>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className='header-right'>
                  <NavBar/>
                </div>
              </div>
              <div className='Content'>
                {routes}
              </div>
            {/* </authContext.Provider> */}
          </ServerContext.Provider>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
