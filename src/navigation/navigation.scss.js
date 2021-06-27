import styled from "styled-components";

export const StyledNavigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 10;
    background: black;
`;

export const StyledNavigationList = styled.ul`
    background: black;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    line-height: 50px;
    cursor: pointer;
`;

export const StyledNavigationItem = styled.li`
    background: black;
    margin: 0 10px;
    & a {
        background: black;
        text-decoration: none
    }
`