import React from 'react';
import { render } from 'react-dom';
import ArticlePage from './article-page.js';

render(
    React.createFactory(ArticlePage)(window.articlePageProps),
    document.getElementById(window.articlePageId)
);