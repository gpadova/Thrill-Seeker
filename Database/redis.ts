import { createClient } from 'redis';
import { Entity, Schema, Repository } from 'redis-om';

const redisClient = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
});

class Airport extends Entity {}
let airportSchema = new Schema(
    Airport,
    {
        entityId: {type: "string"},
        parentId: {type: "string"},
        name: {type: "string", indexed:true},
        type: {type: "string"},
        iata: {type: "string"}
    },
    {
        dataStructure: "JSON"
    }
    )
