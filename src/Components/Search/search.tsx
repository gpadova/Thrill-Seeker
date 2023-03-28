"use strict";

import styled from "styled-components";
import SearchBox from "./searchBox";
import SearchFlightResult from "./searchFlightResult";
import { useState } from "react";

export default function SearchPage() {
  const [from, setFrom] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [departure, setDeparture] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  return (
    <Page>
      <h2>Find the best all-around trip for you</h2>
      <SearchBox
        from={from}
        destiny={destiny}
        departure={departure}
        returnDate={returnDate}
        setFrom={setFrom}
        setDestiny={setDestiny}
        setDeparture={setDeparture}
        setReturnDate={setReturnDate}
      />
      <h3>Here are the best results, carefully searched for you:</h3>
      <SearchFlightResult />
    </Page>
  );
}

const Page = styled.div`
  width: 100vw;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 25px;
  }
  h3 {
    margin-top: 50px;
  }
`;
