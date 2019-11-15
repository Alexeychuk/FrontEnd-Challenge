import styled from 'styled-components';

const StyledList = styled.ul`
    padding: 15px;
    display: grid;
    overflow: hidden;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    max-width: 1200px;
    margin: 0 auto;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export default StyledList;
