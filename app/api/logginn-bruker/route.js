import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";
import { serialize } from 'cookie';
//import { AuthProvider } from "react-auth-kit";
//import { generateAuthToken } from "../auth"; // Import generateAuthToken from auth module
//import { fetchData } from '../../utilFunc/api'; // Import the fetchData function


// Initialize Prisma client
const prisma = new PrismaClient();
//const jwt = require('jsonwebtoken');
// Generate access token
/*export function gAT(bruker) {
    const accessToken = jwt.sign({ id: bruker.id, email: bruker.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    console.log("Access Token:", accessToken);
    return accessToken;
}*/
export async function POST(req, res) {
    const body = await req.json();
    const { epost, passord } = body;
    console.log({ body });

    try {
        // Sjekk om brukeren eksisterer i databasen basert på e-post
        const bruker = await prisma.bruker.findFirst({
            where: {
                epost: {
                    equals: epost
                }
            }
        });

        // Hvis brukeren ikke eksisterer, returner en feilmelding
        if (!bruker) {
            return NextResponse.error("Feil e-post eller passord", { status: 400 });
        }

        // Sjekk om passordet stemmer overens med passordet lagret i databasen
        if (bruker.passord !== passord) {
            return NextResponse.error("Feil e-post eller passord", { status: 400 });
        }

        //If au
        const cookieOptions = {
            path:'/',
            httpOnly: false,
            sameSite:'none',
            secure: 'true',
        };
        const serializedCookie = serialize('userEmail', epost, cookieOptions);
        return NextResponse.json({ success: true, message: "Brukeren er logget inn", bruker }, {
            headers: {
                'Set-Cookie': serializedCookie
            }
        });
    } catch (error) {
        // Håndter feil, for eksempel problemer med databaseforbindelsen
        console.error("Feil ved innlogging:", error);
        return NextResponse.error(error.message, { status: 500 });
    }
}

// Sørg for at Prisma-klienten blir riktig frakoblet når serveren stenger ned
export async function tearDown() {
    await prisma.$disconnect();
}


/* Generate refresh token
        const refreshToken = jwt.sign({ id: bruker.id, email: bruker.email }, process.env.REFRESH_TOKEN_SECRET);
        const tokenInfo = gAT(bruker);
        console.log(tokenInfo.accessToken); // Access the access token
        /console.log(tokenInfo.consoleLog);  // Access the log message*/


        /*Set access token as a cookie
        const accessTokenValue = gAT(bruker);
        const accessTokenCookie = serialize('accessToken', accessTokenValue, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60, // 15 minutes expiration
            path: '/' // Set the cookie path
        });
        res.setHeader('Set-Cookie', accessTokenCookie);

        // Send a success response
        res.status(200).json({ success: true, message: 'Login successful' });

        // Set refresh token as a cookie
        const refreshTokenCookie = serialize('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400, // 1 day expiration
            path: '/' // Set the cookie path
        });

        // Brukeren er logget inn vellykket
        //return NextResponse.json({ message: "Brukeren er logget inn", bruker});
        // Call the fetchData function and pass the accessToken as an argument
        //const data = await fetchData(accessToken);
        //console.log(data);

        // Return the successful login message along with the user data
        return NextResponse.json({ message: "Brukeren er logget inn", bruker }, {
            headers: {
                'Set-Cookie': [accessTokenCookie, refreshTokenCookie] // Set cookies in the response header
            }*/