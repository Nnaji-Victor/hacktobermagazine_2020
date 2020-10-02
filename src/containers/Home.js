import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import GridWrap from "../components/GridWrap";
import Loading from "../components/Loading";
import Logo from "../components/Logo";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000); 
        // Todo
    }, []);

    return (
       <>
        {loading ? (
            <Loading />
        ) : (
            <StyledHome>
                <Banner />
                <Logo loading={loading}/>
                <GridWrap loading={loading}/>
            </StyledHome>
        )}
       </>
    )
};

const StyledHome = styled.section`

`

export default App;
