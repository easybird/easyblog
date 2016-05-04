import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
import { linkDecorator } from '../composite-decorators/link/link-decorator.js';

export function createEditorStateFromRawDraft(rawDraft) {
    if (rawDraft) {
        let contentState = convertFromRaw(rawDraft);

        return EditorState.createWithContent(
            contentState,
            linkDecorator
        );
    }
    return EditorState.createEmpty(linkDecorator);
}

export function convertToRawDraftContentState(editorState) {
    let contentState = editorState.getCurrentContent();
    return convertToRaw(contentState);
}