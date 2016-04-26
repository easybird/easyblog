import React from 'react';
import { BlockStyleHeaderControls }from './controls/block-style-header-controls.js';
import { InlineStyleHeaderControls } from './controls/inline-style-header-controls.js';
import LinkHeaderControls from './controls/link-header-controls.js';
import { RichUtils } from 'draft-js';

class EditorHeader extends React.Component {

    constructor(props) {
        super(props);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
        this.toggleLink = (entityKey) => this._toggleLink(entityKey);
    }

    _toggleLink(entityKey) {
        this.props.onChange(
            RichUtils.toggleLink(
                this.props.editorState,
                this.props.editorState.getSelection(),
                entityKey
            )
        )
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
        const {editorState, onFocus} = this.props;

        return (
            <div className="RichEditor-header">
                <BlockStyleHeaderControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <InlineStyleHeaderControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                />
                <LinkHeaderControls
                    editorState={editorState}
                    onToggle={this.toggleLink}
                    onFocus={onFocus}
                />
            </div>
        )
    }

}

EditorHeader.propTypes = {
    editorState: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired
};

export default EditorHeader;