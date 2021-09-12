import * as React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background-color: var(--uva-orange);
    color: var(--uva-blue);
    font-family: var(--header-text);
    font-size: 34px;
    font-weight: bold; 
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: center;
    z-index: 2;

`; 

const Header: React.FunctionComponent = () => {
    return (
        <StyledHeader>
            Hoos Problem
        </StyledHeader>
    );
}

export default Header;