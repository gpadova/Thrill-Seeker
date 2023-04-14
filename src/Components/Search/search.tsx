"use strict";

import styled from "styled-components";
import SearchBox from "./searchBox";
import SearchFlightResult from "./searchFlightResult";
import { useState, FormEvent, useEffect } from "react";
import axios from "axios";

export default function SearchPage() {
  const [from, setFrom] = useState<string>("");
  const [originAiport, setOriginAiport] = useState<string>("");
  const [destiny, setDestiny] = useState<string>("");
  const [destinyAiport, setDestinyAiport] = useState<string>("");
  const [departure, setDeparture] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [itineraries, setItineraries] = useState<{}>();
  const [flights, setFlights] = useState<{}>();
  const [flightsIds, setFlightsIds] = useState<{}>();
  const [searchedButton, setSearchButton] = useState<boolean>(false);

  const dayOfFlight = Number(departure.split("-")[2]);
  const monthOfFlight = Number(departure.split("-")[1]);

  const options = {
    method: "POST",
    url: "https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "e7c9c19d43msh763f88b9c5afbfcp1e6b6ejsn6c1d904b889a",
      "X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
    },
    data: `{"query":{"market":"BR","locale":"pt-BR",
    "currency":"USD","queryLegs":[{"originPlaceId":
    {"iata":"${originAiport}"},"destinationPlaceId":
    {"iata":"${destinyAiport}"},"date":{"year":${departure.split("-")[0]},
    "month":${monthOfFlight},"day":${dayOfFlight}}}],
    "cabinClass":"CABIN_CLASS_ECONOMY","adults":1}}`,
  };

  async function handleSubmit(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    try {
      const response = await axios.request(options);
      setFlights(response.data.content);
      setItineraries(response.data.content.results.itineraries);
      setSearchButton(true);
      console.log(flights);
      console.log(itineraries);
    } catch (error) {
      console.log(error);
    }
  }

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
      {searchedButton && (
        <h3>Here are the best results, carefully searched for you:</h3>
      )}
      {searchedButton &&
        Object.keys(itineraries!).map((flightId, index) => (
          <SearchFlightResult
            key={index}
            flightId={flightId}
            flights={flights}
            itineraries={itineraries}
            from = {from}
            originAiport = {originAiport}
            destiny = {destiny}
            destinyAiport={destinyAiport}
          />
        ))}
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
