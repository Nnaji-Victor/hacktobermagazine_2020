import React, { useRef } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';

const GridWrap = () => {
    const grid_wrap = useRef(null);

    const images = [
        {
            image: 1,
            title: "Lorem q",
            number: "BO4",
        },
        {
            image: 2,
            title: "Lorem q",
            number: "BO4",
        },
        {
            image: 3,
            title: "Lorem q",
            number: "BO4",
        },
        {
            image: 4,
            title: "Lorem q",
            number: "BO4",
        },
    ];
    
    useEffect(() => {
        console.log(grid_wrap.current);
    }, [])
    return (
        <StyledGridWrapper>
            <div ref={grid_wrap} className="grid-wrap">
                <div className="grid">
                    {images.map( (image, index) => (
                        <GridItem image={image.image} title={image.title} number={image.number} key={image+index}/>
                    ))}
                </div>
            </div>
        </StyledGridWrapper>
    )
}

const StyledGridWrapper = styled.div`
    margin-top: 70px;

    .grid-wrap{
        position: relative;
        max-width: 1100px;
        margin: 0 auto;
        padding: 6rem 1rem 0;
    }

    .grid {
        margin: 0 auto;
        position: relative;
        /* display: none; */
    }
`;

export default GridWrap
