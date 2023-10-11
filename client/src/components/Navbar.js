import { Link } from 'react-router-dom';
import { authContext } from './Contexts';
import { useContext } from 'react';

function NavBar() {
    const {isAuth, setAuth} = useContext(authContext);
    return (
        <div>
            <nav>
                {isAuth ? <Link to="/user">
                    <button>
                        User
                    </button>
                </Link>: null}
                {!isAuth ? <Link to="/register">
                    <button>
                        Registration
                    </button>
                </Link>: null}
                {isAuth ? <Link to="/login" onClick={() => setAuth(false)}>
                    <button>
                        Logout
                    </button>
                </Link>: <Link to="/login">
                    <button>
                        Sign In
                    </button>
                </Link>}
            </nav>
        </div>
    )
}

export default NavBar;