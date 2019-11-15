import React from 'react';
import Link from 'next/link';
import { Bar, StyledLink } from './StyledHeader';

interface Props {
    referTo: string;
    label: string;
}

const Header: React.FC<Props> = ({ referTo, label }) => {
    return (
        <Bar>
            <Link href={referTo}>
                <StyledLink>{label}</StyledLink>
            </Link>
        </Bar>
    );
};

export default Header;
