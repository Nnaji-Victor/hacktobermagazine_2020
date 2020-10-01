import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Loading from "../components/Loading";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, loading);

    return (
       <>
        {loading ? (
            <Loading />
        ) : (
            <StyledHome>
                <Banner />
            </StyledHome>
        )}
       </>
    )
};

const StyledHome = styled.section`

`

export default App;
