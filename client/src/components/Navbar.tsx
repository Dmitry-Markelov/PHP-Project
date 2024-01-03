import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import React from 'react';
import { StoreContext } from '../App';

const NavBar = () => {
    const store = useContext(StoreContext);

    const handleLogOut = () => {
        localStorage.clear();
        store.isAuthLogOut();
        <Navigate to="/main" replace={true} />
    }
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
                    <button onClick={() => handleLogOut()}>
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