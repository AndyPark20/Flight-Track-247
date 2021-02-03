set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "UserInfo" (
	"userId" serial NOT NULL,
	"username" serial NOT NULL,
	"password" serial NOT NULL,
	"CreatedAt" DATETIME NOT NULL,
	CONSTRAINT "UserInfo_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Saved Airport" (
	"userId" serial NOT NULL,
	"Airport Code" TEXT NOT NULL,
	"Date" DATE NOT NULL,
	"start_time" TIME NOT NULL,
	"end_time" TIME NOT NULL,
	"type" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Flight" (
	"userId" serial NOT NULL,
	"icao24" VARCHAR(255) NOT NULL,
	"time" DATETIME NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Saved Airport" ADD CONSTRAINT "Saved Airport_fk0" FOREIGN KEY ("userId") REFERENCES "UserInfo"("userId");

ALTER TABLE "Flight" ADD CONSTRAINT "Flight_fk0" FOREIGN KEY ("userId") REFERENCES "UserInfo"("userId");
