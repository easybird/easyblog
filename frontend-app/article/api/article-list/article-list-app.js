import React from 'react';
import { render } from 'react-dom';
import ArticleList from './article-list.js';

render(
    React.createFactory(ArticleList)(window.articleListProps),
    document.getElementById(window.articleListId)
);