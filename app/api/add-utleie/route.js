/*
import { PrismaClient } from "@/prisma/generated/client";


// Initialize Prisma client
const prisma = new PrismaClient();

export async function utleietjeneste(req, res) {
    try {
        const { tjenestenavn, antall } = req.body;
        
        // Først oppretter du reservasjonen
        const reservasjon = await prisma.reservasjon.create({
            data: {
                // Legg til eventuelle relevante felt for reservasjonen her
            }
        });

        // Deretter oppretter du utleietjenesten og kobler den til reservasjonen
        await prisma.utleietjeneste.create({
            data: {
                tjenestenavn,
                antall,
                reservasjonUtleietjeneste: {
                    create: {
                        antall,
                        reservasjon: {
                            connect: {
                                reservasjonNr: reservasjon.reservasjonNr
                            }
                        }
                    }
                }
            }
        });

        return res.status(201).json({ message: 'Utleietjeneste opprettet' });
    } catch (error) {
        console.error('Feil ved oppretting av utleietjeneste:', error);
        return res.status(500).json({ error: 'Intern serverfeil' });
    }
}

// Sørg for at Prisma-klienten blir riktig frakoblet når serveren stenger ned
export async function tearDown() {
    await prisma.$disconnect();
}
*/
import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const res = await request.json();
        const reservasjonsnr = parseInt(res.reservasjonsnr);
        const utleieTjenesteNr = parseInt(res.utleieTjenesteNr);
        const antall = parseInt(res.antall);

        // Oppretter en ny post i "ReservasjonUtleietjeneste" tabellen i databasen
        const newReservation = await prisma.reservasjonUtleietjeneste.create({
            data: {
                reservasjonNr: reservasjonsnr,
                utleieTjenesteNr,
                antall
            }
        });

        console.log('Ny reservasjon opprettet:', newReservation);

        return NextResponse.json({ success: true, message: 'Reservasjonen ble opprettet.' });
    } catch (error) {
        console.error("Feil ved oppretting av reservasjon:", error);
        return NextResponse.error("Kunne ikke opprette reservasjon.", { status: 500 });
    }
}