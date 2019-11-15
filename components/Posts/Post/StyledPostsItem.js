import styled from 'styled-components';

const Styledli = styled.li`
    position: relative;
    font-family: 'Ubuntu';
    border-radius: 5px;
    padding: 10px 15px;
    flex: 1 0 80%;
    object-fit: cover;
    box-shadow: 0 0 8px 0px #000000;
    transition: all 0.3s;
    &:hover {
        box-shadow: 0 0 6px 0px #000000;
        transform: scale(1.03);
    }

    @media (min-width: 768px) {
        padding: 15px 20px;
    }
`;

export default Styledli;
