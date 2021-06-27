import styled from "styled-components";

export const StyledVideoList = styled.ul`
    list-style-type: none;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledVideoPlayer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0,0,0,.6);
`;
