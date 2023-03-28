import prisma from "../Database/database.js";
import data from "../public/airportsList.json" assert { type: "json" };

const options = {
    method: 'GET',
    url: 'https://skyscanner-api.p.rapidapi.com/v3/geo/hierarchy/flights/en-US',
    headers: {
      'X-RapidAPI-Key': 'e7c9c19d43msh763f88b9c5afbfcp1e6b6ejsn6c1d904b889a',
      'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
    }
  };


async function main() {
    let objKeys = Object.keys(data)
    let objValues = Object.values(data)   
    await prisma.airports.deleteMany({})
    for(let i = 0; i < objKeys.length; i++) {
        await prisma.airports.create({
            data : {
                entityId: objValues[i].entityId,
                parentId: objValues[i].parentId,
                name: objValues[i].name,
                type: objValues[i].type,
                iata: objValues[i].iata
            }
        })
    }
}

main()
    .then(() => {
        console.log("Register done with success")
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
    .finally(async() => {
        await prisma.$disconnect();
    })

