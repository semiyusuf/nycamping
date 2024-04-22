/*import {NextResponse} from "next/server"
//import { parse } from 'cookie';

//const jwt = require('jsonwebtoken');
//let decodedToken = ''/*request, response*

export async function middleware(request) {
    //const cookie = request.cookies
    const cookie = request.cookies.get('userEmail')
    console.log('cookie', cookie)
    //const cookieValue = cookie.value
    //console.log('cookie value:', cookieValue);
    
    if (cookie) {
        console.log('fant cookie')
        return NextResponse.next()
        
    } else {
        console.log('Fant ikke cookie')
        return (NextResponse.redirect(new URL('/logginn', request.url)))
    }
}

export const config = {
    matcher: ['/bruker', '/booking', '/kontakt', '/aktiviteter']
}

/*export default async function cverdi(request) {
    const cookie = request.cookies.get('userEmail')
    console.log('cookie', cookie)
    let cookieValue = cookie.value
    console.log('cookie value:', cookieValue);
    
    if (cookieValue) {
        console.log('fant cookie');
        return NextResponse.next(); // Return a NextResponse instance
    } else {
        console.log('Fant ikke cookie');
        return NextResponse.redirect(new URL('/logginn', request.url)); // Return a NextResponse instance
    }

}


//LOGIC
/* Check if the session cookie exists
    if (cookie.userEmail) {
        // User is logged in
        // You can perform any additional checks here if needed
        return NextResponse.next();
    } else {
        // User is not logged in'/login'
        // Redirect the user to the login page or return an error response new URL('/', request.url)
        return NextResponse.redirect(new URL('/bruker', request.url));
    }*/




    //chatgpt logic
     // Log the cookie header to see its contents
    //console.log("Cookie Header:", request.headers.cookie);
    // Extract cookies from the request headers
    //const cookies = parse(request.headers.cookie || '');
    //const cookie = request.cookies





  //const user = supabase.getUser();
    //const user = ''
    /* Extract the access token from the request headers or cookies
    const accessToken = request.headers.authorization?.replace('Bearer ', '');
    console.log('Access Tokennnnn', accessToken);
    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log(decodedToken)
    /*if (!user) {
        return NextResponse.redirect (
            new URL('/', request.url),
            console.log('ble redirekted')
        )
   } 

   // Check if the request is for the login route
   if (request.url.pathname === '/') {
        // Allow requests to the login route without redirection
        return NextResponse.next();
    }

   if (!accessToken) {
    // Access token is missing, redirect to the login page
    return NextResponse.redirect(
        new URL('/', request.url),
        console.log('ble redirektettttd')
    );
    }

    try {
        // Validate the access token
        //const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        //jwt.get(accessToken);
        //if (decodedToken == accessToken)
        // If the token is valid, allow the request to proceed
        console.log('Her er secret', decodedToken)
        return NextResponse.next();

    } catch (e) {
        // If the token is invalid, redirect to the login page
        // Log the error for debugging purposes
        console.error('Token verification error:', error);
        // Check if the error is due to token expiration
        if (error.name === 'TokenExpiredError') {
            console.log('Access token has expired');
            // Redirect to the login page with a message indicating that the session has expired
            console.log('ble redirekted')
            return NextResponse.redirect(new URL('/?expired=true', request.url));
        } else {
            console.log('Invalid access token');
            // Redirect to the login page with a generic error message
            return NextResponse.redirect(new URL('/?error=true', request.url));
        }
    }
    
    //return NextResponse.next()*/