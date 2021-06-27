import styled from "styled-components";

export const StyledVideoContainer = styled.li`
    width: 40%;
    min-width: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.5287289915966386) 0%, rgba(131,58,180,.1) 50%, rgba(85,85,85,0) 100%);
    border-radius: 5px;

`;

export const StyledVideoData = styled.div`
    width: 50%;
    margin: 5px;
    min-width: 200px;
    padding: 10px;
`;

export const StyledVideoInfo = styled.div`
    padding-top: 10px;
    width: 100%;
    text-align: center;
`;

export const StyledVideoImage = styled.img`
    width: 50%;
    max-width: 200px;
    object-fit: cover;
    z-index: 1;
`;