import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 80%;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    & > * {
        margin-bottom: 10px;
    }
    @media (min-width: 768px) {
        width: 70%;
        & > * {
            margin-bottom: 15px;
        }
    }

    @media (min-width: 768px) {
        width: 50%;
        & > * {
            margin-bottom: 20px;
        }
    }
`;

const Form = ({ onSubmit = () => null, children }) => <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;

export default Form;
