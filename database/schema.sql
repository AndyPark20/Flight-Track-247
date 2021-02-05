set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "userInfo" (
  "userId" serial NOT NULL,
  "username" text NOT NULL,
  "password" text NOT NULL,
  "createdAt" timestamp NOT NULL default now(),
  primary key ("userId")
);
CREATE TABLE "savedAirport" (
  "savedAirportId" serial not null,
	"userId" integer NOT NULL,
	"airportCode" text NOT NULL,
	"date" integer NOT NULL,
	"startTime" integer NOT NULL,
	"endTime" integer NOT NULL,
	"type" text NOT NULL,
  primary key ("savedAirportId")
);
CREATE TABLE "flight" (
  "flightId" serial not null,
	"userId" integer NOT NULL,
	"icao24" VARCHAR(255) NOT NULL,
	"time" integer NOT NULL,
  primary key ("flightId")
);
ALTER TABLE "savedAirport" ADD CONSTRAINT "savedAirport_fk0" FOREIGN KEY ("userId") REFERENCES "userInfo"("userId");
ALTER TABLE "flight" ADD CONSTRAINT "flight_fk0" FOREIGN KEY ("userId") REFERENCES "userInfo"("userId");
