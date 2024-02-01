import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { StoreContext } from '../App';
import { NavButton } from './NavButon';

const NavBar = () => {
    const logo = require('../assets/logo192.png');

    const store = useContext(StoreContext);
    const navigate = useNavigate();

    const [isAuth, setIsAuth] = useState<boolean>(store.isAuth());

    useEffect(() => {
        setIsAuth(store.isAuth());
    }, [store.isAuth()]);

    const handleLogOut = () => {
        localStorage.clear();
        store.isAuthLogOut();
        navigate('/login', { replace: true });
    }
    return (
        <>
            <header className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='header-right'>
                    <nav>
                        {isAuth && <NavButton to='/user' text='User' />}
                        {isAuth && <NavButton to='/main' text='Main' />}
                        {!isAuth && <NavButton to='/register' text='Register' />}
                        {!isAuth && <NavButton to='/login' text='Sig In' />}
                        {isAuth && <button onClick={() => handleLogOut()}>Log Out</button>}
                    </nav>
                </div>
            </header>
            <div className='Content'>
                <Outlet />
            </div>
        </>
    )
}

export default NavBar;