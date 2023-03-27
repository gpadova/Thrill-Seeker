'use strict'

import styled from "styled-components"
import SearchBox from "./searchBox"
import SearchFlightResult from "./searchFlightResult"

export default function SearchPage() {
    return (
        <Page>
            <h2>Find the best all-around trip for you</h2>
            <SearchBox />
            <h3>Here are the best results, carefully searched for you:</h3>
            <SearchFlightResult />
        </Page>
    )
}

const Page = styled.div`
    width: 100vw;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    h2 {
        font-size: 25px
    }
    h3 {
        margin-top: 50px;
    }
`