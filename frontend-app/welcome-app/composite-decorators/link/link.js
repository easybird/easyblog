import React from 'react';
import { Entity } from 'draft-js';

export const Link = (props) => {
    const styles = {
        link: {
            color: '#8bc34a'
        }
    };

    const {url} = Entity.get(props.entityKey).getData();

    return (
        <a href={url} style={styles.link} target="_blank">
            {props.children}
        </a>
    );
};

