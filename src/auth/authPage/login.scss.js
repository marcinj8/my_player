import styled from "styled-components";

export const StyledLoginForm = styled.form`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const StyledLoginInput = styled.input`
    width: 95%;
    color: black;
    border: ${props => props.invalid ? '2px solid red' : '2px solid black'};
    max-width: 200px;
    outline: none;
    padding-top: 15px;
    margin: 5px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const StyledLoginButton = styled.button`
    color: black;
    max-width: 200px;
    margin: 5px auto;

`;
