import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function GET() {
    try {
        const henteSone = await prisma.sone.findMany({
            select: {
                soneNr: true,
                sonenavn: true,
            }
        });
        return NextResponse.json({ henteSone }); // Returner både tjenestenavn og pris
    } catch (error) {
        // Håndter feil
        console.error("Feil", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}