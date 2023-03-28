-- CreateTable
CREATE TABLE "Airports" (
    "id" SERIAL NOT NULL,
    "entityId" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "iata" TEXT NOT NULL,

    CONSTRAINT "Airports_pkey" PRIMARY KEY ("id")
);
