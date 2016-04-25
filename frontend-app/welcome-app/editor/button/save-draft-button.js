import React from 'react';

class SaveDraftButton extends React.Component {

    render() {
        return (
            <input
                type="button"
                onClick={this.props.onSaveDraft}
                value="Save Draft"
            />
        )
    }
}

SaveDraftButton.propTypes = {
    onSaveDraft: React.PropTypes.func.isRequired
};
export default SaveDraftButton;