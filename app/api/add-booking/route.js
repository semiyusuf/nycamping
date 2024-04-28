import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function POST(request) {
    const res = await request.json();
    const brukerNrId = parseInt(res.brukerNrId);
    const soneNrId = parseInt(res.soneNrId);
    const plassNrId = parseInt(res.plassNrId);    
    const { fraDato, tilDato } = res;
    console.log({ res });

    try {
        // Legg til reservasjon
        const result = await prisma.reservasjon.create({
            data: {
                brukerNrId,
                soneNrId,
                plassNrId,
                fraDato,
                tilDato
            }
        });

    
        return NextResponse.json({ result });
    } catch (error) {
        // Håndter feil
        console.error("Feil ved opprettelse av reservasjon", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}

// Sørg for at Prisma-klienten blir riktig frakoblet når serveren stenger ned
export async function tearDown() {
    await prisma.$disconnect();
}