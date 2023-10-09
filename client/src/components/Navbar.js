import { Link } from 'react-router-dom';
import isAuth from '../routes/Login';

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/User">Home </Link>
                <Link to="/Register">Registration </Link>
                {isAuth ? <Link to="/login">Logout</Link> : <Link to="/login">Login</Link>}
                {console.log(isAuth)}
            </nav>
        </div>
    )
}

export default NavBar;