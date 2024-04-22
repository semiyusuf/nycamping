import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export async function POST(request) {
    const res = await request.json();
    const { fornavn, etternavn, epost, telefon, passord } = res;
    console.log({ res });

    try {
        // Use Prisma client to create a new entry in the database
        const result = await prisma.bruker.create({
            data: {
                fornavn,
                etternavn,
                epost,
                telefon,
                passord
            }
        });

        // Return the result as a JSON response
        return NextResponse.json({ result });
    } catch(e) {}
}

// Ensure Prisma client is properly disconnected when the server shuts down
export async function tearDown() {
    await prisma.$disconnect();
}

/*catch (error) {
        // Handle errors, such as database connection issues
        console.error("Error creating bruker:", error);
        return NextResponse.error(error.message, { status: 500 });
    }*/

/*import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

export async function POST(request) {
    const res= await request.json()
    const {fornavn, etternavn, epost, telefon, passord} = res;
    console.log({res})

    const result = await prisma.bruker.create({
        data: {
            fornavn,
            etternavn,
            epost,
            telefon,
            passord
        }
    })

    return NextResponse.json({result})
}*/