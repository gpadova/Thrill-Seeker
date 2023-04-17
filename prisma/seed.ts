import prisma from "../database/database.js";
import data from "../public/airportsList.json" assert { type: "json" };

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

