import React, { Component } from 'react';
import StyledContainer from './StyledContainer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledContainer>{this.props.children}</StyledContainer>
            </React.Fragment>
        );
    }
}

export default Layout;
