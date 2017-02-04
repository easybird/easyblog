import React from 'react';
import { createEditorStateFromRawDraft } from './article/helpers/convert-editor-state.js';
import Editor from './easyBlog/editor';
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
        < Editor
          onClick={this.focus}
          editorState={editorState}
          onChange={this.onChange}
          ref="editorContent"
        />
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
