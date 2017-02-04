import React from 'react';
import WelcomeHeader from './header/welcome-header.js';
import WelcomeMain from './main/welcome-main.js';

class Welcome extends React.Component {

    render() {
        const {title, initialRawDraft} = this.props;

        return (
            <div>
                <WelcomeHeader
                    title={title}
                    subTitle="Here is an example of how the use of this editor looks like:"
                />
                <WelcomeMain
                    initialRawDraft={initialRawDraft}
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
