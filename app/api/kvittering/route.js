import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET() {
    try {
        // Finn den siste reservasjonen opprettet
        const reservasjon = await prisma.reservasjon.findFirst({
            orderBy: {
                reservasjonNr: 'desc' 
            },
            select: {
                fraDato: true,
                tilDato: true,
                bruker: { select: { fornavn: true, etternavn: true } },
                sone: { select: { sonenavn: true } },
                plass: {
                    include: { 
                        fasilitet: { select: { navn: true } },
                    },
                },
            },
        });;

        if (!reservasjon) {
            return NextResponse.error("Ingen reservasjon funnet for brukerNrId 2", { status: 404 });
        }

        // Returner reservasjonsinformasjonen til klienten
        return NextResponse.json({ reservasjon });
    } catch (error) {
        // Håndter feil
        console.error("Feil", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}

// Sørg for at Prisma-klienten blir riktig frakoblet når serveren stenger ned
export async function tearDown() {
    await prisma.$disconnect();
}