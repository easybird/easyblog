import React from 'react';
import EasyBlog from '../../../../../core/easyBlog';
import OldEasyBlog from '../../../../../core/article/editor/easyBlog';
import Article from '../../../../../core/article/article.js';
import ArticleOverview from '../../../../../core/article/article-overview.js';
import {
  getBlockStyle,
  styleMap,
  getMediaBlockObject,
  articleStyle
} from '../../../../../core/article/constants/styles.js';
import { convertToRawDraftContentState } from '../../../../../core/article/helpers/convert-editor-state.js';

class WelcomeMain extends React.Component {

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
    const { rawDraft } = this.state;

    const { initialRawDraft } = this.props;

    const blockStyleFn = getBlockStyle;
    const blockRendererFn = getMediaBlockObject;
    const customStyleMap = styleMap;
    const customArticleStyle = articleStyle;
    const onSaveDraft = this._onSaveDraft;

    return (
      <div>
        <EasyBlog
          customStyle={{paddingBottom: '200px'}}
          onSaveDraft={ onSaveDraft }
          blockStyleFn={ blockStyleFn}
          blockRendererFn={blockRendererFn}
          customStyleMap={customStyleMap}
          articleStyle={customArticleStyle}
          initialRawDraft={initialRawDraft}
        />
        <hr/>
        <OldEasyBlog
          onSaveDraft={ onSaveDraft }
          blockStyleFn={ blockStyleFn}
          blockRendererFn={blockRendererFn}
          customStyleMap={customStyleMap}
          articleStyle={customArticleStyle}
          initialRawDraft={initialRawDraft}
        />
        <hr/>
        <div style={articleStyle}>
          <ArticleOverview
            blockStyleFn={blockStyleFn}
            blockRendererFn={blockRendererFn}
            customStyleMap={customStyleMap}
            rawDraft={rawDraft}
            title="Small preview:"
            articleUrl="http://easybird.be/blog/future-react"
          />
        </div>
        <hr/>
        <div style={articleStyle}>
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
    )
  }
}

WelcomeMain.propTypes = {
  initialRawDraft: React.PropTypes.object
};
export default WelcomeMain;
