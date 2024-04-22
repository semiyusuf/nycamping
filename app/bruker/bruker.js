
//import { fetchData } from './utilFunc/api';
//import { gAT } from '../api/logginn-bruker/route';
//import React, { useEffect, useState } from 'react';
import { serialize } from 'cookie';
import {NextResponse} from "next/server"
import React from 'react';
//import React, { useState } from 'react';


export async function brukere(request){

    //const userEmail = hentbruker(request)
     // State to hold the userEmail value
     const hentC = request.cookies.get('userEmail')
     console.log(hentC)

     return hentC
     
}

    /*Example usage:
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/api/logginn-bruker', {
                headers: {
                    Authorization: `Bearer ${gAT}`
                }
            });
            const data = await response.json();
            console.log(data); // Example: Log the fetched data
        }
        fetchData();
    }, [gAT]); // Fetch data whenever accessToken changes
    export default function bbb() {
        return (
          <>
          <h1>BBBBBBBBB</h1>
          </>
        )

    }
    
    function hentbruker(request) {
    //const hentC = request.cookies.get('userEmail')
    const hentC = request.cookies['userEmail'];
    console.log(hentC)
    return hentC
}
    
, {brukerNr, fornavn, etternavn, epost, telefon ,passord, reservasjoner} 
<div style={{border: '1px solid white', padding: '15px', margin: '10px 0px'}}>
        <h3>{brukerNr}</h3>
        <h4>{etternavn}</h4>
        <p>{fornavn}</p>
        <p>{epost}</p>
        <p>{telefon}</p>
        <p>{passord}</p>
        <p>{reservasjoner}</p>
    </div>  

*/
