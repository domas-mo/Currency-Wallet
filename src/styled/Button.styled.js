import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 20px;
    border: none;
    background-color: #06A6FF;
    color: white;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }
`

export default StyledButton