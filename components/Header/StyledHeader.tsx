import styled from 'styled-components';

export const Bar = styled.div`
    margin-bottom: 15px;
    padding: 15px 15px;
    display: flex;
    justify-content: center;
    background-color: #3f51b5;

    box-shadow: 0 0 10px 0 #000000;
`;

export const StyledLink = styled.a`
    padding: 10px 15px;
    cursor: pointer;
    color: #10316b;
    font-size: 20px;
    font-weight: 700;
    background-color: #ffffff;
    font-family: 'Ubuntu';
    border-radius: 5px;
    box-shadow: 3px 3px 10px 0 #000000;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
    }
`;
