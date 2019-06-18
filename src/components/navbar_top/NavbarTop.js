import React, { Component } from 'react';

import './NavbarTop.css';

class NavbarTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="ContainerNavbarTop">
                <div className="NavbarTop">
                    <div>
                        <i className="fas fa-bell"></i>
                    </div>
                    <div>
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarTop;