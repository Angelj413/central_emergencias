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
                        <i class="fas fa-bell"></i>
                    </div>
                    <div>
                        <i class="fas fa-envelope"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarTop;