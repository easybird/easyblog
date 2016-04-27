import React from 'react';
import DraftEditor from './editor/draft-editor.js';
import RenderedResult from './rendered-result.js';
import { getBlockStyle, styleMap, getMediaBlockObject} from './constants/styles.js';
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
        const blockRendererFn = getMediaBlockObject;
        const customStyleMap = styleMap;
        const onSaveDraft = this._onSaveDraft;

        return (
            <div>
                <h2 className="header">{title}</h2>
                <h5 className="header">Here is an example of the draft-js framework of facebook:</h5>
                <div className="section" />
                <div className= "container">
                    <div className= "row">
                        <div className= "col s12 l6">
                            <DraftEditor
                                onSaveDraft={ onSaveDraft }
                                blockStyleFn={ blockStyleFn}
                                blockRendererFn={blockRendererFn}
                                customStyleMap= {customStyleMap}
                                initialRawDraft={initialRawDraft}
                            />
                        </div>
                        <div className= "col s12 l6">

                            <RenderedResult
                                blockStyleFn={blockStyleFn}
                                blockRendererFn={blockRendererFn}
                                customStyleMap={customStyleMap}
                                rawDraft={rawDraft}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    initialRawDraft: React.PropTypes.object,
    title: React.PropTypes.string.isRequired
};
export default Welcome;