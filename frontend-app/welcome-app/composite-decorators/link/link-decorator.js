import { CompositeDecorator, Entity } from 'draft-js';
import { Link } from '../../composite-decorators/link/link.js';

const DECORATOR_TYPE = 'LINK';

export const linkDecorator = new CompositeDecorator([
    {
        strategy: findLinkEntities,
        component: Link
    }
]);

export function getCurrentUrl(editorState) {
    let url = 'http://www.';

    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const anchorOffset = selection.getAnchorOffset();
    const entityId = editorState
        .getCurrentContent()
        .getBlockForKey(anchorKey)
        .getEntityAt(anchorOffset);

    if (entityId) {
        const currentEntity = Entity.get(entityId);
        if (currentEntity.getType() === DECORATOR_TYPE) {
            url = currentEntity.getData().url;
        }
    }
    return url;
}

export function createLinkEntity(urlValue) {
    return Entity.create(DECORATOR_TYPE, 'MUTABLE', {url: urlValue});
}


function findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
            entityKey !== null &&
            Entity.get(entityKey).getType() === DECORATOR_TYPE
            );
        },
        callback
    );
}