import httpStatus from "http-status";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../Database/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const airports = await prisma.airports.findMany({})
  switch (req.method) {
    case "GET":
      return res.status(httpStatus.OK).send(airports)
    default:
      res.setHeader("Allow", ["GET"])
  }
}
