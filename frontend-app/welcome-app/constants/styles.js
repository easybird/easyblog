import { Media } from '../composite-decorators/atomic-blocks/media.js';

// Custom overrides for "code" style.
export const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 14,
        padding: 2,
    },
    'STRIKETHROUGH': {
        textDecoration: 'line-through',
        fontSize:10,
    },
};

export function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}

export function getMediaBlockObject(block) {
    switch (block.getType()) {
        case 'atomic':
            return {
                component: Media,
                editable: false,
            };
        default:
            return null;
    }
}