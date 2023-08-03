// js
import React from 'react';
import YouTube from 'react-youtube';

export const Trailer = (props) => {
    const opts = {
        height: '575',
        width: '992',

    }

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return <YouTube videoId={props.youtube_key} opts={opts} onReady={_onReady} />

}

