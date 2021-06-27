import React, { useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import AuthContext from '../auth/authentication/authContext';

import VideosList from './videosList';

const PlayListPage = () => {

    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [videosList, setVideosList] = useState(null);

    const setVideos = (list) => {
        setVideosList(list);
        setLoading(false);
        setError(false);
    }

    const getVideoList = useCallback(() => {
        setLoading(true);
        setError(false);
        const link = 'https://thebetter.bsgroup.eu/Media/GetMediaList';
        axios.post(link, {
            "MediaListId": 3,
            "IncludeCategories": false,
            "IncludeImages": true,
            "IncludeMedia": false,
            "PageNumber": 1,
            "PageSize": 15
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => setVideos(res.data.Entities))
            .catch(err =>  {
                setError(true);
                setLoading(false);
            })
    }, [token])

    useEffect(() => {
        if (token) {
            getVideoList();
        }
    }, [token, getVideoList]);


    if (loading) {
        return <h3>loading...</h3>
    }

    if (error) {
        return <h3>please try again later</h3>
    }

    return (
        <div>
            {
                videosList && <VideosList
                    videosList={videosList}
                />
            }

        </div>
    )
}

export default PlayListPage;