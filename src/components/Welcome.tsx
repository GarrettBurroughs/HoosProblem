import * as React from 'react';
import styled from 'styled-components';

interface WelcomeProps{}

const StyledWelcome = styled.div`
`

const Welcome: React.FunctionComponent<WelcomeProps> = ({}) => {
    return (
        <StyledWelcome>
        </StyledWelcome>
    );
}

export default Welcome;