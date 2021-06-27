import React from 'react';

import {
    StyledVideoContainer,
    StyledVideoData,
    StyledVideoInfo,
    StyledVideoImage
} from './videoContainer.scss';

const VideoContainer = ({ title, description, duration, images, year, playVideo }) => {

    let image
    if (images) {
        image = images.find(image => image.ImageTypeCode === 'FRAME');
    }

    if (!description && !duration && !image) {
        return null;
    }

    return (
        <StyledVideoContainer
        >
            <StyledVideoData>
                <h3>{title}</h3>
                {year && <h5>Production: {year}</h5>}
                {duration > 0 ? <StyledVideoInfo>Duration: {Math.round(duration / 36000)} min</StyledVideoInfo> : null}
                <StyledVideoInfo>{description}</StyledVideoInfo>
                <button
                    style={{ color: 'black', width: '100px', padding: '5px', margin: '5px auto' }}
                    onClick={playVideo}
                >play</button>
            </StyledVideoData>
            {image && <StyledVideoImage alt={title} src={image.Url} />}
        </StyledVideoContainer>
    )
}

export default VideoContainer;