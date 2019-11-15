import styled from 'styled-components';
import Styledli from './StyledPostsItem';

const StyledContent = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 100%;
    /* grid-auto-rows: 25%; */
    grid-template-rows: 20% auto 20%;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    max-width: 1200px;
    margin: 0 auto;
    & h3 {
        font-weight: 700;
        text-align: center;
        padding-bottom: 10px;
    }

    & p {
        padding-bottom: 10px;
        line-height: 1.3;
        overflow-y: scroll;
    }
`;

export default StyledContent;
