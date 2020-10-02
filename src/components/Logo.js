import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { AnimateLogo } from './Animate';

const Logo = ({loading}) => {

    const logo = useRef(null);

    useEffect(() => {
        AnimateLogo(logo.current);
    }, [loading])
    return (
        <StyledLogo to="/">
            <img ref={logo} src={process.env.PUBLIC_URL+ "/assets/images/logo.svg"} alt="hacktobermagazine logo" className="brand"/>
        </StyledLogo>
    )
}

const StyledLogo = styled(Link)`
    margin: 15px auto;
    display: block;
    width: 40%;
    overflow: hidden;

    @media(max-width: 600px){
        width: 80%;
    }
    .brand{
        width: 100%;
    }
`;

export default Logo
