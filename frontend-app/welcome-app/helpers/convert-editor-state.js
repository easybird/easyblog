import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';

export function createEditorStateFromRawDraft(rawDraft) {
    if (rawDraft) {
        let blockArray = convertFromRaw(rawDraft);

        return EditorState.createWithContent(
            ContentState.createFromBlockArray(blockArray)
        );
    }
    return EditorState.createEmpty();
}

export function convertToRawDraftContentState(editorState) {
    let contentState = editorState.getCurrentContent();
    return convertToRaw(contentState);
}