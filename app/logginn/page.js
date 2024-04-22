"use client";
import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import './logginn.css';
//import {useState} from 'react';

export default function Logginn() {
    const [epost, setEpost] = useState('');
    const [passord, setPassord] = useState('');
    const [feilMelding, setFeilMelding] = useState(''); // Legger til en tilstand for feilmelding
    const router = useRouter();

    const handleInputEpost = (event) => {
        setEpost(event.target.value);
    }
    const handleInputPassord = (event) => {
        setPassord(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/logginn-bruker', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ epost, passord }),
                credentials: 'include'
            });

            if (response.ok) {
                router.push('/'); // Hvis innloggingen er vellykket, naviger til hovedsiden
            } else {
                const data = await response.json();
                setFeilMelding("Feil e-post eller passord");
            }
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

return (
        <>
            <div className="logginn">
                <div className="logginnbox">
                    <h1>Logg inn</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="inputbox">
                            <label><strong>Email</strong></label>
                            <input type="text" placeholder='Skriv inn email' name='email' value={epost}
                                onChange={handleInputEpost} required />
                        </div>
                        <div className="inputbox">
                            <label><strong>Passord</strong></label>
                            <input type="password" placeholder='Skriv inn passord' name='passord' value={passord}
                                onChange={handleInputPassord} required /> {/* Endret input type til password */}
                        </div>
                        {feilMelding && <div className="feil-melding">{feilMelding}</div>} {/* Vis feilmelding hvis den er satt */}
                        <div className="inputbox">
                            <button type="submit">Logg inn</button>
                        </div>
                    </form>
                    <div className="registrering-link">
                        <p>Har du ikke bruker?</p> <Link href="/registrer">Registrer deg nå</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
﻿
//slim2x
//slim2x