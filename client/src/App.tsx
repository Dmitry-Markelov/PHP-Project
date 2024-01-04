import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import { HOST } from './config';
import Server from './modules/Server/Server';
import { Store } from './modules/Store/Store';
import { getToken, removeToken } from './Hooks/useToken';
import MainPage from './routes/MainPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import UserPage from './routes/UserPage';

export const StoreContext = React.createContext<Store>(null!);
export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
  const store = new Store();
  const server = new Server(HOST, store);
  const token = getToken();
  const [isAuthTest, setIsAuthTest] = useState<boolean>(false);

  const handleAutoLogin = async () => {
    const result = await server.autoLogin();
    if (result) {
      store.setAuth();
      setIsAuthTest(store.isAuth());
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
            {/* <NavBar isAuth={isAuthTest}/> */}
              <Routes>
                <Route path="/" element={<NavBar isAuth={isAuthTest} />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/user" element={<UserPage />} />
                  <Route path="/main" element={<MainPage />} />
                </Route>
              </Routes>
          </ServerContext.Provider>
        </StoreContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
