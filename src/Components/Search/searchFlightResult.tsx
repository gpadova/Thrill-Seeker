"use strict";

import styled from "styled-components";

export default function SearchFlightResult({
  flights,
  itineraries,
  flightId,
  from,
  originAiport,
  destiny,
  destinyAiport,
}: {
  flights: any;
  itineraries: any;
  flightId: string;
  from: string;
  originAiport: string;
  destiny: string;
  destinyAiport: string;
}) {
  const hourOfArrival: number =
    flights.results.legs[flightId].arrivalDateTime.hour;
  const minuteOfArrival: number =
    flights.results.legs[flightId].arrivalDateTime.minute;
  const hourOfDeparture: number =
    flights.results.legs[flightId].departureDateTime.hour;
  const minuteOfDeparture: number =
    flights.results.legs[flightId].departureDateTime.minute;
  const durationFlight: number =
    flights.results.legs[flightId].durationInMinutes;
  const carrierId: string =
    flights.results.legs[flightId].operatingCarrierIds[0];
  const logoUrl: string = flights.results.carriers[carrierId].imageUrl;

  return (
    <Box>
      <div className="carrierInfo">
        <img alt="airtline logo" src={logoUrl} />
      </div>
      <div className="info">
        <div className="departure">
          <p className="time">
            {hourOfDeparture >= 10 ? hourOfDeparture : "0" + hourOfDeparture}:
            {minuteOfDeparture >= 10
              ? minuteOfDeparture
              : "0" + minuteOfDeparture}{" "}
            - {hourOfArrival >= 10 ? hourOfDeparture : "0" + hourOfArrival}:
            {minuteOfArrival >= 10 ? minuteOfArrival : "0" + minuteOfArrival}
          </p>
          <p>
            Duration: {Math.floor(durationFlight / 60)} h {durationFlight % 60} m
          </p>
          <p>
            {originAiport} {from} - {destinyAiport} {destiny}
          </p>
        </div>
      </div>
      <div className="actionButton">
        <p>
          USD{" "}
          {flights.results.itineraries[flightId].pricingOptions[0].price.amount}
        </p>
        <button>
          <a
            target="_blank"
            href={
              flights.results.itineraries[flightId].pricingOptions[0].items[0]
                .deepLink
            }
          >
            Buy Offer
          </a>
        </button>
      </div>
    </Box>
  );
}

const Box = styled.div`
  width: 85%;
  height: 200px;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  .info {
    width: 80%;
    display: flex;
    flex-direction: column;
    .time {
      font-weight: 700;
    }
  }
  .actionButton {
    border-left: 1px solid black;
    width: 20%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button {
      background: #f19c79;
      border-radius: 5px;
      border: 1px solid white;
      height: 40px;
      width: 80%;
      font-size: 17px;
    }
    p {
        font-weight: 700;
    }
  }
  .carrierInfo {
    margin-left: 10px;
    p {
      font-weight: 700;
    }
    img {
      width: 70px;
      border-radius: 10px;
    }
  }
`;
