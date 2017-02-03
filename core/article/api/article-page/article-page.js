import React from 'react';
import Article from '../../article.js';
import { getBlockStyle, styleMap, getMediaBlockObject, articleStyle} from '../../constants/styles.js';

class ArticlePage extends React.Component {

    constructor(props) {
        super(props);

        this.blockStyleFn = (this.props.blockStyleFn || getBlockStyle);
        this.blockRendererFn = (this.props.blockRendererFn || getMediaBlockObject);
        this.customStyleMap = (this.props.customStyleMap || styleMap);
        this.articleStyle = (this.props.articleStyle || articleStyle)
    }

    render() {
        let {article} = this.props;
        return (
            <div style={this.articleStyle}>
                <Article
                    blockStyleFn={this.blockStyleFn}
                    blockRendererFn={this.blockRendererFn}
                    customStyleMap={this.customStyleMap}
                    rawDraft={article.content}
                    articleUrl={article.articleUrl}
                />
            </div>
        )
    }
}

ArticlePage.propTypes = {
    blockStyleFn: React.PropTypes.func,
    blockRendererFn: React.PropTypes.func,
    customStyleMap: React.PropTypes.object,
    articleStyle: React.PropTypes.object,
    article: React.PropTypes.object.isRequired
};
export default ArticlePage;