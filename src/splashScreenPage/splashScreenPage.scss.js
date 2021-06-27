import styled from "styled-components";

import {
    Link
} from "react-router-dom";

export const StyledSplashScreenPage = styled.section`
    z-index: 150;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(1, 50, 67, 1);
`;

export const StyledSplashScreenPageTitle = styled.h2`
    margin: 10% auto;
    font-size: 2.5rem;
`;

export const StyledLink = styled(Link)`
   margin: 10px
`;