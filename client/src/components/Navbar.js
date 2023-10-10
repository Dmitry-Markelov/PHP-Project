import { Link } from 'react-router-dom';
import { authContext } from './Contexts';
import { useContext } from 'react';

function NavBar() {
    const {isAuth, setAuth} = useContext(authContext);
    return (
        <div>
            <nav>
                <Link to="/User">Home </Link>
                <Link to="/Register">Registration </Link>
                {isAuth ? <Link to="/login" onClick={() => setAuth=false}>Logout</Link>: <Link to="/login">Login</Link>}
            </nav>
        </div>
    )
}

export default NavBar;