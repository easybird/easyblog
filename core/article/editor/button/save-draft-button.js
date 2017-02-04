import React from 'react';

class SaveDraftButton extends React.Component {

    render() {
        return (
          <button onClick={this.props.onSaveDraft}> Save Draft</button>
        )
    }
}

SaveDraftButton.propTypes = {
    onSaveDraft: React.PropTypes.func.isRequired
};
export default SaveDraftButton;
