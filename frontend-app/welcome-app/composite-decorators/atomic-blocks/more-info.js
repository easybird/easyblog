import React from 'react';
import {styles} from '../link/link.js';
import { articleTypes } from '../../article/article-types.js';

class MoreInfo extends React.Component {

    render() {
        //TODO fix automatic extra line creation: https://github.com/facebook/draft-js/issues/327
        const moreInfo = <a href="http://hierKomtDeUrlVanHetArtikel.be" style={styles.link}>{this.props.text}
        </a>;

        if (this.context.articleState === articleTypes.EDIT) {
            return (
                <div>
                    {moreInfo}
                    <div className="divider"/>
                    <div style={{color: "#999"}}> Hier wordt het artikel afgebroken in het overzicht</div>
                    <div className="divider"/>
                </div>
            )
        } else if (this.context.articleState === articleTypes.FULL) {
            return <div/>;
        } else if (this.context.articleState === articleTypes.OVERVIEW) {
            return moreInfo
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