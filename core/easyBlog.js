import React from 'react';
import { createEditorStateFromRawDraft } from './article/helpers/convert-editor-state.js';
import EditorHeader from './article/editor/header/editor-header.js';
import EditorContent from './article/editor/content/editor-content.js';
import SaveDraftButton from './article/editor/button/save-draft-button.js';
import { articleTypes } from './article/article-types.js';

class EasyBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorStateFromRawDraft(props.initialRawDraft)
    };

    this.focus = () => this.refs.editorContent.focus();
    this.onChange = (editorState) => this.setState({ editorState });
    this.saveDraft = (e) => this.props.onSaveDraft(this.state.editorState);

    this.getChildContext = () => {
      return { articleState: articleTypes.EDIT }
    }
  }

  render() {
    const { editorState } = this.state;
    const { customStyle } = this.props;
    return (
      <div style={customStyle}>
        <div className="card RichEditor-root" style={this.props.articleStyle}>
          < EditorHeader
            editorState={editorState}
            onChange={this.onChange}
            onFocus={this.focus}
          />
          < EditorContent
            onClick={this.focus}
            blockStyleFn={this.props.blockStyleFn}
            blockRendererFn={this.props.blockRendererFn}
            customStyleMap={this.props.customStyleMap}
            editorState={editorState}
            onChange={this.onChange}
            ref="editorContent"
          />
        </div>
        <div>
          < SaveDraftButton
            onSaveDraft={this.saveDraft}
          />
        </div>
      </div>
    );
  }
}

EasyBlog.childContextTypes = {
  articleState: React.PropTypes.string
};

EasyBlog.propTypes = {
  customStyle: React.PropTypes.object,
  blockStyleFn: React.PropTypes.func.isRequired,
  blockRendererFn: React.PropTypes.func.isRequired,
  customStyleMap: React.PropTypes.object.isRequired,
  articleStyle: React.PropTypes.object.isRequired,
  initialRawDraft: React.PropTypes.object.isRequired,
  onSaveDraft: React.PropTypes.func.isRequired
};
export default EasyBlog;
