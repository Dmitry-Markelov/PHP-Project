import logo from './logo.svg';
import './App.css';
import UseRoutes from './Hooks/useRoutes';

function App() {
  const routes = UseRoutes();

  return (
    <div className="App"> 
      {routes}
    </div>
  );
}

export default App;
