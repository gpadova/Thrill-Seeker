"use strict";

import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { themes } from "../sidebar";
import { Dispatch, SetStateAction } from "react";

export default function SearchBox({
  from,
  destiny,
  departure,
  returnDate,
  setFrom,
  setDestiny,
  setDeparture,
  setReturnDate,
}: {
  from: string;
  destiny: string;
  departure: string;
  returnDate: string;
  setFrom: Dispatch<SetStateAction<string>>;
  setDestiny: Dispatch<SetStateAction<string>>;
  setDeparture: Dispatch<SetStateAction<string>>;
  setReturnDate: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Box>
      <form>
        <input
          type="text"
          id="from"
          name="from"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
        <input
          type="text"
          id="destiny"
          name="destiny"
          placeholder="Destiny"
          value={destiny}
          onChange={(e) => setDestiny(e.target.value)}
          required
        />
        <input
          type="date"
          name="departure"
          placeholder="Departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Return"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />
        <button type="submit">
          <HiMagnifyingGlass />
        </button>
      </form>
    </Box>
  );
}

const Box = styled.div`
  width: 85%;
  height: 200px;
  border: 1px solid #000000;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  input {
    margin-left: 10px;
    width: 170px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #f19c79;
    -webkit-box-shadow: 9px 15px 24px -12px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 9px 15px 24px -12px rgba(0, 0, 0, 0.61);
    box-shadow: 9px 15px 24px -12px rgba(0, 0, 0, 0.61);
  }
  button {
    margin-left: 10px;
    width: 50px;
    height: 50px;
    font-size: 20px;
    background: #f19c79;
    border: 1px solid white;
    border-radius: 7px;
  }
`;
