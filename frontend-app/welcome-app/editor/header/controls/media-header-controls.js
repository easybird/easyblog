import React from 'react';
import { Entity, AtomicBlockUtils } from 'draft-js';
import StyleButton from '../style-button.js';
import UrlInputField from './url-input-field.js';

const MEDIA = {AUDIO: 'audio', VIDEO: 'video', IMAGE: 'image', MORE_INFO: 'more-info'};

class MediaHeaderControls extends React.Component {

    constructor(props) {
        super(props);

        this.addMedia = this._addMedia.bind(this);
        this.cancelLink = this._cancelLink.bind(this);
        this.confirmLink = this._confirmLink.bind(this);
        this.collapseLinkBlock = this._collapseLinkBlock.bind(this);

        this.openAudioInput = this._openAudioInput.bind(this);
        this.openImageInput = this._openImageInput.bind(this);
        this.openVideoInput = this._openVideoInput.bind(this);
        this.addMoreInfoTag = () => this._addMoreInfoTag();

        this.openUrlInputField = (type) => this._openUrlInputField(type);

        this.state = {
            urlInputField: {
                isActive: false,
                type: undefined
            }
        }
    }

    _openAudioInput() {
        this.openUrlInputField(MEDIA.AUDIO)
    }

    _openImageInput() {
        this.openUrlInputField(MEDIA.IMAGE)
    }

    _openVideoInput() {
        this.openUrlInputField(MEDIA.VIDEO)
    }

    _addMoreInfoTag() {
        this.props.onChange(
            AtomicBlockUtils.insertAtomicBlock(
                this.props.editorState,
                Entity.create(MEDIA.MORE_INFO, 'IMMUTABLE', {text: 'Read more'}),
                ' '
            )
        )
    }

    _openUrlInputField(type) {
        this.setState({
            urlInputField: {
                isActive: true,
                type: type
            }
        });
    }

    _confirmLink(urlValue) {
        if (urlValue && urlValue !== '') {
            // TODO add check if valid media link!
            this.addMedia(this.state.urlInputField.type, urlValue)
        }
        this.collapseLinkBlock();
    }

    _addMedia(type, src) {
        const entityKey = Entity.create(type, 'IMMUTABLE', {src});

        this.props.onChange(
            AtomicBlockUtils.insertAtomicBlock(
                this.props.editorState,
                entityKey,
                ' '
            )
        )
    }

    _collapseLinkBlock() {
        this.setState({
            urlInputField: {
                isActive: false,
                type: undefined
            }
        }, () => {
            setTimeout(() => this.props.onFocus(), 0);
        })
    }

    _cancelLink() {
        this.collapseLinkBlock();
    }

    render() {
        let urlInput;
        const {type, isActive} = this.state.urlInputField;

        if (isActive) {
            urlInput =
                <UrlInputField
                    onConfirm={this.confirmLink}
                    onCancel={this.cancelLink}
                />;
        }

        return (
            <div>
                <StyleButton
                    key={MEDIA.AUDIO}
                    active={type === MEDIA.AUDIO}
                    label='Add Audio'
                    onToggle={this.openAudioInput}
                    style={true}
                />
                <StyleButton
                    key={MEDIA.IMAGE}
                    active={type === MEDIA.IMAGE}
                    label='Add Image'
                    onToggle={this.openImageInput}
                    style={true}
                />
                <StyleButton
                    key={MEDIA.VIDEO}
                    active={type === MEDIA.VIDEO}
                    label='Add Video'
                    onToggle={this.openVideoInput}
                    style={true}
                />
                <StyleButton
                    key={MEDIA.MORE_INFO}
                    active={false}
                    label='Add More info label'
                    onToggle={this.addMoreInfoTag}
                    style={true}
                />
                    {urlInput}
            </div>
        )
    }
}

MediaHeaderControls.propTypes = {
    editorState: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired
};

export default MediaHeaderControls;