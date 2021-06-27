import React from 'react';

import { StyledSplashScreenPage, StyledSplashScreenPageTitle, StyledLink } from './splashScreenPage.scss';

const SplashScreenPage = () => {

    return (
        <StyledSplashScreenPage>
            <StyledSplashScreenPageTitle>My Player</StyledSplashScreenPageTitle>
            <StyledLink to={`/login/member`}>Login</StyledLink>
            <StyledLink to='/login/guest'>Continue as a guest</StyledLink>
        </StyledSplashScreenPage>
    )
}

export default SplashScreenPage;