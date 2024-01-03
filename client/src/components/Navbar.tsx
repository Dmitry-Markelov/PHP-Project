import { Link } from 'react-router-dom';
import { authContext } from './Contexts';
import { useContext } from 'react';
import React from 'react';

const NavBar = () => {
    // const {isAuth, setAuth} = useContext(authContext);
    return (
        <div>
            <nav>
                {/* {isAuth ? <Link to="/user"> */}
                <Link to="/user">
                    <button>
                        User
                    </button>
                {/* </Link>: null} */}
                </Link>
                {/* {!isAuth ? <Link to="/register"> */}
                <Link to="/register">
                    <button>
                        Registration
                    </button>
                {/* </Link>: null} */}
                </Link>
                {/* {isAuth ? <Link to="/login" onClick={() => setAuth(false)}> */}
                <Link to="/login">
                    <button>
                        Logout
                    </button>
                </Link>
                {/* </Link>: <Link to="/login"> */}
                <Link to="/login">
                    <button>
                        Sign In
                    </button>
                {/* </Link>} */}
                </Link>
            </nav>
        </div>
    )
}

export default NavBar;