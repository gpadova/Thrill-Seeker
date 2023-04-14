"use strict";

import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Airport } from "../../../protocols";

export default function SearchBox({
  from,
  destiny,
  departure,
  returnDate,
  setFrom,
  setDestiny,
  setDeparture,
  setReturnDate,
  originAiport,
  destinyAiport,
  setOriginAiport,
  setDestinyAiport,
  handleSubmit,
}: {
  from: string;
  destiny: string;
  departure: string;
  returnDate: string;
  originAiport: string;
  destinyAiport: string;
  setFrom: Dispatch<SetStateAction<string>>;
  setDestiny: Dispatch<SetStateAction<string>>;
  setDeparture: Dispatch<SetStateAction<string>>;
  setReturnDate: Dispatch<SetStateAction<string>>;
  setOriginAiport: Dispatch<SetStateAction<string>>;
  setDestinyAiport: Dispatch<SetStateAction<string>>;
  handleSubmit: any;
}) {
  const [airports, setAirports] = useState<Airport[] | []>([]);
  const [openFromSuggestions, setOpenFromSuggestions] =
    useState<boolean>(false);
  const [openDestinySuggestions, setOpenDestinySuggestions] =
    useState<boolean>(false);
  useEffect(() => {
    axios
      .get("/api/airports")
      .then((res) => {
        setAirports(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div
          className="from"
        >
          <input
            type="text"
            id="from"
            name="from"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onClick={() => setOpenFromSuggestions(!openFromSuggestions)}
            required
          />
          {openFromSuggestions && from.length !== 0 && (
            <Suggestions>
              {airports
                .filter((item) => {
                  const searchedItem = from.toLowerCase();
                  const airportsItem = item.name.toLowerCase();

                  return searchedItem && airportsItem.startsWith(searchedItem);
                })
                .map((item, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setFrom(item.name);
                      setOpenFromSuggestions(false);
                      setOriginAiport(item.iata);
                    }}
                  >
                    {item.name} - {item.iata}
                  </p>
                ))
                .slice(0, from.length)}
            </Suggestions>
          )}
        </div>
        <div className="destiny">
          <input
            type="text"
            id="destiny"
            name="destiny"
            placeholder="Destiny"
            value={destiny}
            onChange={(e) => setDestiny(e.target.value)}
            onClick={() => setOpenDestinySuggestions(!openDestinySuggestions)}
            required
          />
          {openDestinySuggestions && destiny.length !== 0 && (
            <Suggestions>
              {airports
                .filter((item) => {
                  const searchedItem = destiny.toLowerCase();
                  const airportsItem = item.name.toLowerCase();

                  return searchedItem && airportsItem.startsWith(searchedItem);
                })
                .map((item, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setDestiny(item.name);
                      setOpenDestinySuggestions(false);
                      setDestinyAiport(item.iata);
                    }}
                  >
                    {item.name} - {item.iata}
                  </p>
                ))
                .slice(0, destiny.length)}
            </Suggestions>
          )}
        </div>
        <input
          type="date"
          name="departure"
          placeholder="Departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
        />
        <button type="submit">
          <HiMagnifyingGlass />
        </button>
      </form>
    </Box>
  );
}

const Suggestions = styled.div`
  width: 170px;
  height: 90px;
  border: 1px solid black;
  background-color: aliceblue;
  overflow-y: scroll;
  position: absolute;
  z-index: 4;
  p {
    font-size: 16px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Box = styled.div`
  width: 85%;
  height: 200px;
  border: 1px solid #000000;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  align-items: center;
  gap: 6px;
  input {
    width: 170px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #f19c79;
    -webkit-box-shadow: 9px 15px 24px -12px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 9px 15px 24px -12px rgba(0, 0, 0, 0.61);
    box-shadow: 9px 15px 24px -12px rgba(0, 0, 0, 0.61);
  }
  button {
    width: calc(20% - 40px);
    font-size: 20px;
    background: #f19c79;
    border: 1px solid white;
    border-radius: 7px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
`;
