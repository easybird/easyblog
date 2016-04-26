import React from 'react';
import { getCurrentUrl, createLinkEntity } from '../../../composite-decorators/link/link-decorator.js';
import StyleButton from '../style-button.js';

class LinkHeaderControls extends React.Component {

    constructor(props) {
        super(props);

        this.promptForLink = this._promptForLink.bind(this);
        this.onURLChange = (e) => this.setState({urlValue: e.target.value});
        this.confirmLink = this._confirmLink.bind(this);
        this.cancelLink = this._cancelLink.bind(this);
        this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
        this.removeLink = this._removeLink.bind(this);
        this.collapseLinkBlock = this._collapseLinkBlock.bind(this);

        this.state = {
            showURLInput: false,
            urlValue: ''
        }
    }

    _promptForLink() {
        const {editorState} = this.props;

        if (!editorState.getSelection().isCollapsed()) {
            this.setState({
                showURLInput: true,
                urlValue: getCurrentUrl(editorState)
            }, () => {
                setTimeout(() => this.refs.url.focus(), 0);
            });
        } else {
            this.collapseLinkBlock();
        }
    }

    _collapseLinkBlock() {
        this.setState({
            showURLInput: false,
            urlValue: ''
        }, () => {
            setTimeout(() => this.props.onFocus(), 0);
        })
    }

    _confirmLink() {
        const {urlValue} = this.state;
        let linkEntity = null;
        if (urlValue && urlValue !== '') {
            linkEntity = createLinkEntity(urlValue);
        }
        this.props.onToggle(linkEntity);
        this.collapseLinkBlock();
    }

    _cancelLink() {
        this.collapseLinkBlock();
    }

    _onLinkInputKeyDown(e) {
        if (e.which === 13) {
            this._confirmLink(e);
        }
    }

    _removeLink() {
        const {editorState} = this.props;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            this.props.onToggle(null);
        }
    }

    render() {
        const styles = {
            root: {
                fontFamily: '\'Georgia\', serif',
                padding: 20,
                width: 600,
            },
            buttons: {
                marginBottom: 10,
            },
            urlInputContainer: {
                marginBottom: 10,
            },
            urlInput: {
                fontFamily: '\'Georgia\', serif',
                marginRight: 10,
                padding: 3,
            },
            editor: {
                border: '1px solid #ccc',
                cursor: 'text',
                minHeight: 80,
                padding: 10,
            },
            button: {
                marginTop: 10,
                textAlign: 'center',
            },
            link: {
                color: '#3b5998',
                textDecoration: 'underline',
            },
        };


        let urlInput;
        if (this.state.showURLInput) {
            urlInput =
                <div style={styles.urlInputContainer}>
                    <input
                        onChange={this.onURLChange}
                        ref="url"
                        style={styles.urlInput}
                        type="text"
                        value={this.state.urlValue}
                        onKeyDown={this.onLinkInputKeyDown}
                    />
                    <StyleButton
                        key='Confirm'
                        active={true}
                        label='Confirm'
                        onToggle={this.confirmLink}
                        style={true}
                    />
                    <StyleButton
                        key='Cancel'
                        active={true}
                        label='Cancel'
                        onToggle={this.cancelLink}
                        style={true}
                    />
                </div>;
        }

        return (
            <div>
                <StyleButton
                    key='add_link'
                    active={this.state.showURLInput}
                    label='Add Link'
                    onToggle={this.promptForLink}
                    style={true}
                />
                <StyleButton
                    key='remove_link'
                    active={false}
                    label='Remove Link'
                    onToggle={this.removeLink}
                    style={false}
                />
                    {urlInput}
            </div>
        )
    }
}

LinkHeaderControls.propTypes = {
    editorState: React.PropTypes.object.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired
};

export default LinkHeaderControls;