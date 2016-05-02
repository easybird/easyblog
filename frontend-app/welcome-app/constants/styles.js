import { Media } from '../composite-decorators/atomic-blocks/media.js';

// Custom overrides for "code" style.
export const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 14,
        padding: 2,
    },
    STRIKETHROUGH: {
        textDecoration: 'line-through'
    },
    LINK: {
        color: '#8bc34a'
    },
    DESCRIPTION: {
        color: '#999'
    }
};

export function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote':
            return 'light';
        case 'header-five':
        case 'header-four':
        case 'header-six':
            return 'title';
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