import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET() {
    try {
        // Hent alle brukere fra databasen
        const brukere = await prisma.bruker.findMany({
            // Velg bare fornavn og etternavn for å begrense dataene som sendes til klienten
            select: {
                brukerNr: true,
                fornavn: true,
                etternavn: true
            }
        });
        
        // Returner JSON-responsen med brukerne
        return NextResponse.json({ brukere });
    } catch (error) {
        // Hvis det oppstår en feil, logg den og send en feilrespons
        console.error("Feil ved behandling av POST-forespørsel:", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}
        
// Sørg for at Prisma-klienten blir riktig frakoblet når serveren stenger ned
export async function tearDown() {
    await prisma.$disconnect();
}