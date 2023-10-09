import { Link } from 'react-router-dom';

function NavBar() {
    const isAuth = false;
    return (
        <div>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/Register">Registration </Link>
                {isAuth ? <Link to="/loguot">Logout</Link> : <Link to="/login">Login</Link>}
            </nav>
        </div>
    )
}

export default NavBar;