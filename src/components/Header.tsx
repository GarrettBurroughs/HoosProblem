import * as React from 'react';
import { Link } from 'react-router-dom';
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

    @media only screen and (max-width: 700px){
        p {
            width: 200px;
            text-align: center;
        }
        height: 100px;
    }
`;

const StyledLink = styled.div`
    width: 100px;
    height: 70px;
    background-color: var(--uva-blue);
    position: fixed;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;


    & > a {
        text-decoration: none;
        color: white;
    }

    &::hover{

        background-color: white;

        & > a {
            color: var(--uva-blue);
        }
    }

    @media only screen and (max-width: 700px){
        height: 100px;
        width: 100px;
    }
    
`;

interface ILink{
    text: string;
    link: string;
}
interface HeaderProps {
    links?: ILink[]
}


const Header: React.FunctionComponent<HeaderProps> = ({ links }) => {
    return (
        <StyledHeader>
            {links?.map((l, id) => (
                <StyledLink >
                    <Link to={l.link} key={id}> {l.text} </Link>
                </StyledLink>
            ))}
            <p>
            Hoos Problem
            </p>
        </StyledHeader>
    );
}

export default Header;