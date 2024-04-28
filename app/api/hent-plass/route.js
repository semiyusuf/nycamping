import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        // Les strømmen og konverter til streng
        const requestBody = await req.text();
        console.log("Request body:", requestBody);

        const { valgtFasilitet } = JSON.parse(requestBody);
        
        // Logg verdien av valgtFasilitet til konsollen
        console.log("Valgt fasilitet:", valgtFasilitet);
        
        // Utfør forespørselen for å finne plasser basert på valgt fasilitet
        const plasser = await prisma.plass.findMany({
            where: {
                fasilitet: {
                    navn: valgtFasilitet
                }
            },
            select: {
                plassNr: true
            }
        });
        
        // Returner JSON-responsen med plasser
        return NextResponse.json({ plasser });
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
