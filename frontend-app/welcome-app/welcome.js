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
                    subTitle="Here is an example of the draft-js framework of facebook:"
                />
                <WelcomeMain
                    initialRawDraft={initialRawDraft}
                />
                <footer>
                    dit is de footer
                </footer>
            </div>
        );
    }
}

Welcome.propTypes = {
    initialRawDraft: React.PropTypes.object,
    title: React.PropTypes.string.isRequired
};
export default Welcome;