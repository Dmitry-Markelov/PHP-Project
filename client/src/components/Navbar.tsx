import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import React from 'react';
import { StoreContext } from '../App';
import { NavButton } from './NavButon';

type TNavBar = {
    isAuth: boolean;
}

const NavBar = ({ isAuth }: TNavBar) => {
    const store = useContext(StoreContext);
    console.log(isAuth)

    const handleLogOut = () => {
        localStorage.clear();
        store.isAuthLogOut();
        <Navigate to="/main" replace={true} />
    }
    return (
        <>
            <header className='App-header'>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className='header-right'>
                    <nav>
                        {isAuth && <NavButton to='/user' text='User' />}
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