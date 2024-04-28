// API-et
import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET() {
    try {
        const henteFasilitet = await prisma.fasilitet.findMany({
            select: {
                navn: true,
            }
        });
        return NextResponse.json({ henteFasilitet });
    } catch (error) {
        console.error("Feil", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}

export async function POST(req) {
    const { valgtFasilitet } = await req.body.json();
    try {
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
        return NextResponse.json({ plasser });
    } catch (error) {
        console.error("Feil", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}

// Sørg for at Prisma-klienten blir riktig frakoblet når serveren stenger ned
export async function tearDown() {
    await prisma.$disconnect();
}