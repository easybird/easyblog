import React from 'react';
import { Editor, RichUtils } from 'draft-js';
import { createEditorStateFromRawDraft} from '../helpers/convert-editor-state.js';
import EditorHeader from './header/editor-header.js';

class DraftEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: createEditorStateFromRawDraft(props.initialRawDraft)
        };

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});
        this.onSaveDraft = (editorState) => this.props.onSaveDraft(editorState);

        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.saveDraft = (e) => this._saveDraft(e);
    }

    _saveDraft(e) {
        this.props.onSaveDraft(this.state.editorState);
    }

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    render() {
        const {editorState} = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }

        return (
            <div>
                <div className="RichEditor-root">
                    < EditorHeader
                        editorState={editorState}
                        onChange={this.onChange}
                    />
                    <div className={className} onClick={this.focus}>
                        <Editor
                            blockStyleFn={this.props.blockStyleFn}
                            customStyleMap={this.props.customStyleMap}
                            editorState={editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            placeholder="Tell a story..."
                            ref="editor"
                            spellCheck={true}
                        />
                    </div>

                </div>
                <div>
                    <input type="button" onClick={this.saveDraft} value="Save Draft" />
                </div>
            </div>
        );
    }
}

DraftEditor.propTypes = {
    blockStyleFn: React.PropTypes.func.isRequired,
    customStyleMap: React.PropTypes.object.isRequired,
    initialRawDraft: React.PropTypes.object.isRequired,
    onSaveDraft: React.PropTypes.func.isRequired
};
export default DraftEditor;