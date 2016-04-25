import React from 'react';
import { Editor, EditorState } from 'draft-js';
import { createEditorStateFromRawDraft} from './helpers/convert-editor-state.js';


class RenderedResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editorState: createEditorStateFromRawDraft(props.rawDraft)
        };
    }
    componentWillReceiveProps(newProps) {
        if (newProps.rawDraft !== this.props.rawDraft) {
            this.setState({
                editorState: createEditorStateFromRawDraft(newProps.rawDraft)
            })
        }
    }
    render() {
        const {editorState} = this.state;

        const { blockStyleFn } = this.props;
        const { customStyleMap } = this.props;

        return (
            <div>
                <h4 className="header"> Rendered result: </h4>
                <div className='card RichViewer'>
                    <Editor
                        blockStyleFn={blockStyleFn}
                        readOnly={true}
                        customStyleMap={customStyleMap}
                        editorState={editorState}
                    />
                </div>
            </div>
        );
    }
}

RenderedResult.propTypes = {
    blockStyleFn: React.PropTypes.func.isRequired,
    customStyleMap: React.PropTypes.object.isRequired,
    rawDraft: React.PropTypes.object.isRequired
};

export default RenderedResult;