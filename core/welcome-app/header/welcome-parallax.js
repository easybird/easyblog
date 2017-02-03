import React from 'react';

const WelcomeParallax = ({title, subTitle}) => (
    <div className="container">
        <h2 className="header">{title}</h2>
        <h5 className="header">{subTitle}</h5>
    </div>
);

export default WelcomeParallax;