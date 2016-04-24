import React from 'react';
import { BlockStyleControls }from './block-style-controls.js';
import { InlineStyleControls } from './inline-style-controls.js';
import { RichUtils } from 'draft-js';


class EditorHeader extends React.Component {

    constructor(props) {
        super(props);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    _toggleBlockType(blockType) {
        this.props.onChange(
            RichUtils.toggleBlockType(
                this.props.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.props.onChange(
            RichUtils.toggleInlineStyle(
                this.props.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const {editorState} = this.props;
        return (
            <div>
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                />
            </div>
        )
    }
}

EditorHeader.propTypes = {
    editorState: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default EditorHeader;