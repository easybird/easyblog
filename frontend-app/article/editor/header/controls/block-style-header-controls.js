import React from 'react';
import StyleButton from '../style-button.js';
import { BLOCK_TYPES } from '../block-types.js';

export const BlockStyleHeaderControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-header-controls">
            {BLOCK_TYPES.map((type) =>
                    <StyleButton
                        key={type.label}
                        active={type.style === blockType}
                        label={type.label}
                        onToggle={props.onToggle}
                        style={type.style}
                    />
            )}
        </div>
    );
};