import React from 'react';
import { render } from 'react-dom';
import Welcome from './welcome.js';

render(
    React.createFactory(Welcome)(window.welcomeProps),
    document.getElementById('welcome-app')
);