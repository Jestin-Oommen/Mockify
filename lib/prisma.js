import { PrismaClient } from "@prisma/client";

export const db =new PrismaClient();

if(process.env.NODE_ENV!=="production"){
    globalThis.prisma=db;
}

//globalThis.prisma: This global veriable that the Prisma Client instance is 
//reused acress hot reloads during development.Without this, each time your
//application
//reloads a new instance of the Prima Client would be created
//potentially leading to the connection issues