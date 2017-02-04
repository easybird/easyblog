import React from 'react';
import { createEditorStateFromRawDraft} from '../helpers/convert-editor-state.js';
import EditorHeader from './header/editor-header.js';
import EditorContent from './content/editor-content.js';
import SaveDraftButton from './button/save-draft-button.js';
import { articleTypes } from '../article-types.js';

class EasyBlog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: createEditorStateFromRawDraft(props.initialRawDraft)
        };

        this.focus = () => this.refs.editorContent.focus();
        this.onChange = (editorState) => this.setState({editorState});
        this.saveDraft = (e) => this.props.onSaveDraft(this.state.editorState);

        this.getChildContext = () => {
            return {articleState: articleTypes.EDIT}
        }
    }

    render() {
        const {editorState} = this.state;

        return (
            <div>
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
                        onSaveDraft = {this.saveDraft}
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
    blockStyleFn: React.PropTypes.func.isRequired,
    blockRendererFn: React.PropTypes.func.isRequired,
    customStyleMap: React.PropTypes.object.isRequired,
    articleStyle: React.PropTypes.object.isRequired,
    initialRawDraft: React.PropTypes.object.isRequired,
    onSaveDraft: React.PropTypes.func.isRequired
};
export default EasyBlog;
