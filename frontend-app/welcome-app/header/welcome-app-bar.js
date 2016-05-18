import React from 'react';
import NavBarListElement from './navbar-list-element.js';

const LOGO_URL = "images/logo/easybird.png";

const WelcomeAppBar = ({navBarElements}) => {
    const listElements = navBarElements.map(navBar =>
        <NavBarListElement
            key = {navBar.id}
            listElement={navBar}
        />);

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo center">
                            <img src={LOGO_URL}/>
                        </a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="left hide-on-med-and-down">
                            {listElements}
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            {listElements}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default WelcomeAppBar;