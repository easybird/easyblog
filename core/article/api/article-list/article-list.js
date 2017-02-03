import React from 'react';
import ArticleOverview from '../../article-overview.js';
import { getBlockStyle, styleMap, getMediaBlockObject, articleStyle} from '../../constants/styles.js';

class ArticleList extends React.Component {

    constructor(props) {
        super(props);

        this.createArticleList = (articleList) => this._createArticleList(articleList);

        this.blockStyleFn = (this.props.blockStyleFn || getBlockStyle);
        this.blockRendererFn = (this.props.blockRendererFn || getMediaBlockObject);
        this.customStyleMap = (this.props.customStyleMap || styleMap);
        this.articleStyle = (this.props.articleStyle || articleStyle)
    }

    _createArticleList(articles) {
        let articleList = [];
        for (var article of articles) {
            articleList.push(
                <div key={article.articleUrl}>
                    <ArticleOverview
                        blockStyleFn={this.blockStyleFn}
                        blockRendererFn={this.blockRendererFn}
                        customStyleMap={this.customStyleMap}
                        rawDraft={article.content}
                        articleUrl={article.articleUrl}
                    />
                    <div className="section"/>
                </div>
            )
        }
        return articleList;
    }

    render() {
        let articleList = this.createArticleList(this.props.articles);
        return (
            <div style={this.articleStyle}>
                {articleList}
            </div>
        )
    }
}

ArticleList.propTypes = {
    blockStyleFn: React.PropTypes.func,
    blockRendererFn: React.PropTypes.func,
    customStyleMap: React.PropTypes.object,
    articleStyle: React.PropTypes.object,
    articles: React.PropTypes.array.isRequired
};
export default ArticleList;