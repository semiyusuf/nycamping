import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET() {
    try {
        const tjenestenavnMedPris = await prisma.utleietjeneste.findMany({
            select: {
                utleieTjenesteNr: true,
                tjenestenavn: true,
                pris: true // Legg til prisinformasjonen
            }
        });
        return NextResponse.json({ tjenestenavnMedPris }); // Returner både tjenestenavn og pris
    } catch (error) {
        // Håndter feil
        console.error("Feil", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}