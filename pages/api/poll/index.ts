import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { OK, BAD_REQUEST } from "http-status";


const options = {
  method: 'POST',
  url: 'https://skyscanner-api.p.rapidapi.com/v3e/flights/live/search/synced',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'e7c9c19d43msh763f88b9c5afbfcp1e6b6ejsn6c1d904b889a',
    'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
  },
  data: '{"query":{"market":"UK","locale":"en-GB","currency":"EUR","queryLegs":[{"originPlaceId":{"iata":"LHR"},"destinationPlaceId":{"iata":"DXB"},"date":{"year":2023,"month":9,"day":20}}],"cabinClass":"CABIN_CLASS_ECONOMY","adults":2,"childrenAges":[3,9]}}'
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const departureDay = req.query.departureDay as string;
  const originAiport = req.query.originAiport as string;
  const destinyAirport = req.query.destinyAirport as string;

  if(departureDay === undefined || originAiport === undefined || destinyAirport === undefined) {
    return res.status(BAD_REQUEST)
  }

  switch (req.method) {
    case "GET":
      // const optionsPOST = {
      //   method: "POST",
      //   url: "https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create",
      //   headers: {
      //     "content-type": "application/json",
      //     "X-RapidAPI-Key":
      //       "e7c9c19d43msh763f88b9c5afbfcp1e6b6ejsn6c1d904b889a",
      //     "X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
      //   },
      //   data: `{"query":{"market":"BR","locale":"pt-BR",
      //   "currency":"USD","queryLegs":[{"originPlaceId":{"iata":${originAiport}},"destinationPlaceId":{"iata":${destinyAirport}},"date":{"year":${
      //     departureDay.split("-")[0]
      //   },"month":${departureDay.split("-")[2]},"day":${
      //     departureDay.split("-")[1]
      //   }}}],"cabinClass":"CABIN_CLASS_ECONOMY","adults":1}},`,
      // };
      try {

        const response = await axios.request(options)
        return res.send(response)
      } catch (error) {
        console.log(error)
        res.status(BAD_REQUEST)
      }

      // axios.request(options).then(function (response) {
      //   return res.status(OK).send(response.data)
      // }).catch(function (error) {
      //   console.error(error);
      //   return res.status(BAD_REQUEST)
      // });
    default:
      res.setHeader("Allow", ["GET"]);
  }
}
