import React from 'react';
import WelcomeAppBar from './welcome-app-bar.js';
import WelcomeParallax from './welcome-parallax.js';

const navBarElements = [
    {isActive:true, id:"link", text:"Editor"},
    {id:"link2", text:"Teaser preview"},
    {id:"link3", text:"Rendered result"}
];

const WelcomeHeader = ({title, subTitle}) => (
    <header>
        <WelcomeAppBar
            navBarElements={navBarElements}
        />
        <WelcomeParallax
            title={title}
            subTitle={subTitle}
        />
    </header>
);

WelcomeHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string.isRequired
};

export default WelcomeHeader;