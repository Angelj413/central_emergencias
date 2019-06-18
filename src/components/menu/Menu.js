import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    logout() {
        localStorage.clear();
    }
    render() {
        return (
            <div className="ContainerMenu">
                <div className="Menu">
                    <div className="LogoMenu">
                        <p>
                        <span><i className="fas fa-first-aid"></i></span> Central de <span>Emergencias</span> 
                        </p>
                    </div>
                    <div className="links">
                        <NavLink
                            exact
                            to="/dashboard"
                            activeClassName="is-selected"
                            className =  "menuUser"
                        >
                           <i className="fas fa-address-card"></i> Dashboard
                        </NavLink>
                        <NavLink
                            exact
                            to="/profile"
                            activeClassName="is-selected"
                            className =  "menuUser"
                        >
                            <i className="fas fa-user-cog"></i>  Perfil
                        </NavLink>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="is-selected"
                            className =  "menuUser"
                            onClick={this.logout.bind(this)}
                        >
                            <i className="fas fa-sign-out-alt"></i>  Cerrar Sesión
                        </NavLink>
                    </div>
                    <div className="footerMenu">
                        <p><i className="fas fa-user"></i> {localStorage.getItem('tokenUser')}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;