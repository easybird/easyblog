import React from 'react';
import DraftEditor from './editor/draft-editor.js';
import RenderedResult from './rendered-result.js';
import { getBlockStyle, styleMap} from './constants/styles.js';
import { convertToRawDraftContentState } from './helpers/convert-editor-state.js';

class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rawDraft: props.initialRawDraft
        };

        this._onSaveDraft = this._onSaveDraft.bind(this);
    }

    _onSaveDraft(editorState) {
        const rawDraft = convertToRawDraftContentState(editorState);
        console.log("save raw draft: " + JSON.stringify(rawDraft));

        this.setState({
            rawDraft: rawDraft
        })
    }

    render() {
        const {rawDraft} = this.state;

        const {initialRawDraft} = this.props;
        const {title} = this.props;

        const blockStyleFn = getBlockStyle;
        const customStyleMap = styleMap;
        const onSaveDraft = this._onSaveDraft;

        return (
            <div>
                <h4>Draft.js editor example: {title}</h4>
                <DraftEditor
                    onSaveDraft={ onSaveDraft }
                    blockStyleFn={ blockStyleFn}
                    customStyleMap= {customStyleMap}
                    initialRawDraft={initialRawDraft}
                />
                <h4> End of the draft editor example </h4>
                <RenderedResult
                    blockStyleFn={blockStyleFn}
                    customStyleMap={customStyleMap}
                    rawDraft={rawDraft}
                />
            </div>
        );
    }
}

Welcome.propTypes = {
    initialRawDraft: React.PropTypes.object,
    title: React.PropTypes.string.isRequired
};
export default Welcome;