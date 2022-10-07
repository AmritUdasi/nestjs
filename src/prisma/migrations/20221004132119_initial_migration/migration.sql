-- CreateTable
CREATE TABLE "details" (
    "postid" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "body" VARCHAR NOT NULL,

    CONSTRAINT "PK_02185da47c073158a934d3927dd" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product1" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")
);
