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