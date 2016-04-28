import React from 'react';
import {styles} from '../link/link.js';

class MoreInfo extends React.Component {

    render() {
        if (this.context.articleState === 'EDIT') {
            return (
                <a href="http://hierKomtDeUrlVanHetArtikel.be" style={styles.link}>
            {this.props.text}
                </a>
            )
        } else if (this.context.articleState === 'FULL') {
            return <div/>;
        }
    }
}

MoreInfo.contextTypes = {
    articleState: React.PropTypes.string
};

MoreInfo.propTypes = {
    text: React.PropTypes.string.isRequired
};
export default MoreInfo;