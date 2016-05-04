import React from 'react';
import DraftEditor from '../article/editor/draft-editor.js';
import Article from '../article/article.js';
import ArticleOverview from '../article/article-overview.js';
import ArticleList from '../article/api/article-list/article-list.js';
import ArticlePage from '../article/api/article-page/article-page.js';
import { getBlockStyle, styleMap, getMediaBlockObject, articleStyle} from '../article/constants/styles.js';
import { convertToRawDraftContentState } from '../article/helpers/convert-editor-state.js';

class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rawDraft: props.initialRawDraft
        };

        this._onSaveDraft = this._onSaveDraft.bind(this);
    }

    _onSaveDraft(editorState) {
        const rawDraft = convertToRawDraftContentState(editorState);
        console.log("save raw draft: " + JSON.stringify(rawDraft));

        this.setState({
            rawDraft: rawDraft
        })
    }

    render() {
        const {rawDraft} = this.state;

        const {initialRawDraft} = this.props;
        const {title} = this.props;

        const blockStyleFn = getBlockStyle;
        const blockRendererFn = getMediaBlockObject;
        const customStyleMap = styleMap;
        const customArticleStyle = articleStyle;
        const onSaveDraft = this._onSaveDraft;

        return (
            <div>
                <h2 className="header">{title}</h2>
                <h5 className="header">Here is an example of the draft-js framework of facebook:</h5>
                <div className="section" />
                <div className= "container">
                    <div className= "row">
                        <div className= "col s12 l6">
                            <DraftEditor
                                onSaveDraft={ onSaveDraft }
                                blockStyleFn={ blockStyleFn}
                                blockRendererFn={blockRendererFn}
                                customStyleMap= {customStyleMap}
                                articleStyle= {customArticleStyle}
                                initialRawDraft={initialRawDraft}
                            />
                        </div>
                        <div className= "col s12 l3" style={articleStyle}>
                            <ArticleOverview
                                blockStyleFn={blockStyleFn}
                                blockRendererFn={blockRendererFn}
                                customStyleMap={customStyleMap}
                                rawDraft={rawDraft}
                                title="Small preview:"
                                articleUrl="http://easybird.be/blog/future-react"
                            />
                        </div>
                        <div className= "col s12 l3" style={articleStyle}>
                            <Article
                                blockStyleFn={blockStyleFn}
                                blockRendererFn={blockRendererFn}
                                customStyleMap={customStyleMap}
                                rawDraft={rawDraft}
                                title="Rendered result:"
                                articleUrl="http://easybird.be/blog/future-react"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <ArticleList
                            articles={
                                [
                                    {
                                        articleUrl: "http://easybird.be/blog/future-react",
                                        content: rawDraft
                                    },
                                    {
                                        articleUrl: "http://www.easybird.be/en/blog/transform-es6-to-es5-with-babel",
                                        content: rawDraft
                                    }
                                ]
                                }
                        />
                    </div>
                    <div className="row">
                        <ArticlePage
                            article={{
                                articleUrl: "http://easybird.be/blog/future-react",
                                content: rawDraft
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    initialRawDraft: React.PropTypes.object,
    title: React.PropTypes.string.isRequired
};
export default Welcome;