import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../auth/authentication/authContext';
import ReactPlayer from 'react-player';

import VideoContainer from './videoContainer';

import { StyledVideoList, StyledVideoPlayer } from './videoList.scss';

const VideosList = ({ videosList }) => {

    const auth = useContext(AuthContext);
    const [videoUrl, setVideoUrl] = useState(null);

    const getVideo = (videoId) => {
        const link = 'https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo';
        const videoRequestData = {
            MediaId: videoId,
            StreamType: auth.accountType
        }

        axios.post(link, videoRequestData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.token
            }
        })
            .then(res => {
                setVideoUrl(res.data.ContentUrl)
            })
            .catch(err => console.log(err))
    }

    const playVideoHandler = (videoId) => {
        getVideo(videoId);
    }

    const list = videosList.map(video => {

        return (

            <VideoContainer
                key={video.Id}
                videoId={video.Id}
                title={video.Title}
                description={video.Description}
                duration={video.Duration}
                images={video.Images}
                year={video.Year}
                playVideo={() => playVideoHandler(video.Id)}
            />
        )

    })

    return (
        <React.Fragment>
            {videoUrl && <StyledVideoPlayer
                onClick={() => setVideoUrl(null)}
            >
                <ReactPlayer
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    playing={true}
                    url={videoUrl}
                    controls={true}
                />

            </StyledVideoPlayer>
            }
            {typeof videoUrl === 'undefined' && <StyledVideoPlayer
                onClick={() => setVideoUrl(null)}>
                <h3
                    style={{
                        margin: '20% auto',
                        background: 'black',
                        width: '200px'
                }}
                >video not available</h3>
            </StyledVideoPlayer>

            }
            <StyledVideoList>
                {list}
            </StyledVideoList>
        </React.Fragment>
    )
}

export default VideosList;