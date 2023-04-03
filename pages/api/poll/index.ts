import { NextApiRequest, NextApiResponse } from "next";
import axios, { Axios } from "axios";
import { OK, BAD_REQUEST } from "http-status";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { originAiport, destinyAirport } = req.query;
  const  departureDay  = req.query.departureDay as string
  switch (req.method) {
    case "GET":
      const optionsPOST = {
        method: "POST",
        url: "https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "e7c9c19d43msh763f88b9c5afbfcp1e6b6ejsn6c1d904b889a",
          "X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
        },
        data: `{"query":{"market":"BR","locale":"pt-BR","currency":"USD","queryLegs":[{"originPlaceId":{"iata":${originAiport}},"destinationPlaceId":{"iata":${destinyAirport}},"date":{"year":${departureDay.split("-")[0]},"month":${departureDay.split("-")[2]},"day":${departureDay.split("-")[1]}}}],"cabinClass":"CABIN_CLASS_ECONOMY","adults":1}},`
      };
      try {
        const response = await axios.request(optionsPOST);
        return res
          .status(OK)
          .send({
            sessionToken: response.data,
            itineraries: response.data.results.itineraries,
          });
      } catch (error) {
        console.log(error);
        return res.status(BAD_REQUEST);
      }
    default:
      res.setHeader("Allow", ["GET"]);
  }
}
