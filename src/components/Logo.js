import {gsap} from 'gsap';
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Logo = ({loading}) => {

    const logo = useRef(null);

    useEffect(() => {
        gsap.fromTo(logo.current, {
            yPercent: -100,
            autoAlpha: 0,
        }, {
            yPercent: 0,
            autoAlpha: 1,
            ease: "power2.inOut",
            duration: 1.5,
        })
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
