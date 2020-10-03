import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AnimateImages } from './Animate';

const GridItem = ({image, title, number, loading}) => {

    const grid_item = useRef(null);
    const grid__inner = useRef(null);
    const grid__image = useRef(null);
    const grid__title = useRef(null);
    const grid__title_2 = useRef(null);
    
    useEffect(() => {
        AnimateImages(grid_item.current, 
            grid__inner.current, 
            grid__image.current, 
            grid__title.current, 
            grid__title_2.current)
    }, [loading])

    return (
        <StyledGridItem mouseEnter={() => console.log("entered")}>
            <Link to="#" href="#" className="grid__item">
                <div className="grid__item-bg" ref={grid_item}></div>
                <div className="grid__item-wrap" ref={grid__inner}>
                    <div className="js-transition-img__inner" ref={grid__image}>
                        <img className="grid__item-img" src={process.env.PUBLIC_URL+ "/assets/images/" + image + ".jpg"} alt="landscape" />
                    </div>
                </div>
                <h3 className="grid__item-title" ref={grid__title}>{title}</h3>
                <h4 className="grid__item-number" ref={grid__title_2}>{number}</h4>
		    </Link>
        </StyledGridItem>
    )
}

const StyledGridItem = styled.div`
  .grid__item {
    width: 300px;
    position: relative;
    padding: 2.75rem;
    margin-bottom: 5rem;

    @media(max-width: 600px){
        width: 260px;
    }
  }

  .grid__item-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .js-transition-img__inner{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  .grid-wrap--hidden {
	height: 0;
	overflow: hidden;
  }

  .grid__item:nth-child(even) .grid__item-img {
    transform: rotate3d(0, 0, 1, 4deg);
  }

  .grid__item:nth-child(odd) .grid__item-img {
    transform: rotate3d(0, 0, 1, -4deg);
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
    font-size: 1.8rem;
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

  @media (max-width: 768px) {
    .grid__item-number {
      right: -2.45rem;
    }
    .grid__item-title {
      margin-left: -0.25rem;
    }
  }
`;

export default GridItem
