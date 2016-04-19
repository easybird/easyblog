import React from 'react';

class Welcome extends React.Component {

    render() {
        return (
            <div>
            {this.props.title}
            </div>
        )
    }
}

Welcome.propTypes = {
    title: React.PropTypes.string.isRequired
};
export default Welcome;