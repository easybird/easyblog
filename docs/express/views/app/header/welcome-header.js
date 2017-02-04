import React from 'react';

const WelcomeHeader = ({ title, subTitle }) => (
  <header>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h2>{title}</h2>
      <div>
        <img src={"images/logo/easybird.png"}/>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h3>{subTitle}</h3>
    </div>
  </header>
);

WelcomeHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired
};

export default WelcomeHeader;
