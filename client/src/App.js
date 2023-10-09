import './App.css';
import { useRoutes } from './Hooks/useRoutes';
import NavBar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
