import React from 'react';
import StyleButton from '../style-button.js';
import { INLINE_STYLES } from '../inline-style-types.js';

export const InlineStyleHeaderControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div style={{display: 'inline-block'}}>
            {INLINE_STYLES.map(type =>
                    <StyleButton
                        key={type.label}
                        active={currentStyle.has(type.style)}
                        label={type.label}
                        onToggle={props.onToggle}
                        style={type.style}
                    />
            )}
        </div>
    );
};

