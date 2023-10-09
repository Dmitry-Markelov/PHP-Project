import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Login from './components/routes/Login';
import Register from './components/routes/Register';
import User from './components/routes/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="Login"/>,
  },{
    path: "/login",
    element: <Login/>,
  },{
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/user",
    element: <User/>,
  },
])

function App() {
  return (
    <div className="App"> 
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
