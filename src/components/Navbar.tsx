import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export const Navbar = () => {

    const { user, login, logout } = useContext(UserContext);

    const handleLogin = () => { login() };
    const handleLogout = () => { logout() };

    return (
        <nav className="navbar navbar-dark bg-dark mb-2">
            <span className="navbar-brand">{ user ? `Bienvenido ${ user.name }` : 'Bienvenid@' }</span>
            { user
                ? <button className="btn btn-sm btn-primary" onClick={ handleLogout } >Cerrar sesión</button>
                : <button className="btn btn-sm btn-primary" onClick={ handleLogin } >Iniciar sesión</button>
            }
        </nav>
    )
};
 