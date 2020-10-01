import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GridItem = ({image, title, number}) => {
    return (
        <StyledGridItem>
            <Link to="#" href="#" className="grid__item">
                <div className="grid__item-bg"></div>
                <div className="grid__item-wrap">
                    <img className="grid__item-img" src={process.env.PUBLIC_URL+ "/assets/images/" + image + ".jpg"} alt="landscape" />
                </div>
                <h3 className="grid__item-title">{title}</h3>
                <h4 className="grid__item-number">{number}</h4>
		    </Link>
        </StyledGridItem>
    )
}

const StyledGridItem = styled.div`
    .grid__item {
        width: 260px;
        position: relative;
        padding: 2.75rem;
        margin-bottom: 5rem;
    }

    .grid__item-wrap {
	    position: relative;
    }

    .grid__item-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--grid-item-bg);
    }

    .grid__item-img {
	pointer-events: none;
	position: relative;
	max-width: 100%;
	margin: 0 auto;
	display: block;
	outline: 1px solid transparent;
}

    .grid__item:nth-child(even) .grid__item-img {
        transform: rotate3d(0,0,1,4deg);
    }

    .grid__item:nth-child(odd) .grid__item-img {
        transform: rotate3d(0,0,1,-4deg);
    }

    .grid__item-title {
	font-weight: normal;
	position: absolute;
	left: 0;
	top: 0;
	margin: 0 0 0 1rem;
	-webkit-writing-mode: vertical-rl;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	transform-origin: 0 50%;
}

    .grid__item-number {
        font-weight: bold;
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 2.65rem;
        margin: 0 0 0.15rem;
    }

    .grid__item-number > span {
        display: inline-block;
    }

    @media(max-width: 768px){
        .grid__item-number {
            right: -2.45rem;
        }
        .grid__item-title {
            margin-left: -0.25rem;
        }
    }
`;

export default GridItem
