import { NextResponse } from "next/server";

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
}