"use strict";

import styled from "styled-components";
import SearchBox from "./searchBox";
import SearchFlightResult from "./searchFlightResult";
import { useState, FormEvent } from "react";
import axios from "axios";

export default function SearchPage() {
  const [from, setFrom] = useState<string>("");
  const [originAiport, setOriginAiport] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [destinyAiport, setDestinyAiport] = useState<string>("");
  const [departure, setDeparture] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [flights, setFlights] = useState();

  const URL = `/api/poll?originAiport=${originAiport}&destinyAirport=${destinyAiport}&departureDay=${departure}`;
  
  async function handleSubmit(e: FormEvent<HTMLInputElement>) {
    e.preventDefault()
    try {
      const response = await axios.get(URL)
      console.log("request done!")
      setFlights(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(departure)
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
        originAiport={originAiport}
        destinyAiport={destinyAiport}
        setOriginAiport={setOriginAiport}
        setDestinyAiport={setDestinyAiport}
        handleSubmit={handleSubmit}
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
