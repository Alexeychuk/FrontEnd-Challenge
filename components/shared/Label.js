import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #171718;
    cursor: pointer;
    ${props => props.customStyles}
`;

const Label = ({ children, customStyles }) => <StyledLabel customStyles={customStyles}>{children}</StyledLabel>;

export default Label;
