"use client"
import React, { useState, useEffect } from 'react';
import './styleF.css'; // Import your CSS file here
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Booking() {
  const [brukerNrId, setBrukerNrId] = useState([]);
    const [fasiliteter, setFasiliteter] = useState([]);
    const [valgtFasilitet, setValgtFasilitet] = useState(''); // Rettet her
    const [plassNrId, setPlassNrId] = useState([]);
    const [soneNrId, setSoneId] = useState([]);

    const [valgtBruker, setValgtBruker] = useState('');
    const [valgtSone, setValgtSone] = useState('');
    const [valgtPlass, setValgtPlass] = useState('');   


    const [fraDato, setFraDato] = useState('');
    const [tilDato, setTilDato] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Hent fasiliteter fra databasen
        fetch('/api/hent-fasilitet')
            .then((data) => data.json())
            .then(val => setFasiliteter(val.henteFasilitet));
    
        // Hent brukere fra databasen
        fetch('/api/hent-bruker')
        .then((data) => data.json())
        .then(val => setBrukerNrId(val.brukere)); // Oppdaterer brukerNr til å være en array av brukere
    
        // Hent soner fra databasen
        fetch('/api/hent-sone')
            .then((data) => data.json())
            .then(val => setSoneId(val.henteSone));
    }, []);
    

    const handleFasilitetChange = (e) => {
        const valgtFasilitet = e.target.value;
        setValgtFasilitet(valgtFasilitet);
        fetch('/api/hent-plass', {
            method: 'POST',
            body: JSON.stringify({ valgtFasilitet }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setPlassNrId(data.plasser);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // Legg til egnet feilhåndtering her
        });
    };
    

    const handleSoneChange = (e) => {
        const valgtSone = e.target.value;
        console.log("Valgt soneNr:", valgtSone);
        setValgtSone(valgtSone); // Oppdaterer valgtSone-tilstanden
    };
    
    const handlePlassChange = (e) => {
        const valgtPlass = e.target.value;
        console.log("Valgt plassNr:", valgtPlass);
        setValgtPlass(valgtPlass); // Oppdaterer valgtPlass-tilstanden
    };
   
    const handleBrukerChange = (e) => {
        const valgtBruker = e.target.value;
        console.log("Valgt brukernr:", valgtBruker);
        setValgtBruker(valgtBruker); // Oppdaterer valgtBruker-tilstanden
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('/api/add-booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ 
                    brukerNrId: valgtBruker, // Sender brukerens ID
                    soneNrId: valgtSone, // Sender sonens ID
                    plassNrId: valgtPlass, // Sender plassens ID
                    fraDato: fraDato, 
                    tilDato: tilDato 
                })
            });
    
            if (response.ok) {
                router.push('/kvittering'); 
            } else {
                const data = await response.json();
                setFeilMelding("Booking ble ikke vellykket");
            }
        } catch (error) {
            console.error(error);
        }
    }


  return (
    <>
    <div className="bookingPlassLager" ></div>
        <div className="header__image__container">
          <div className="header__content">
            <h1>Nyt sesongene i moderne fasiliteter</h1>
            <p>Book Hytter, Campingvogner, Telt og annet utstyr.</p>
          </div>
          <div className="booking__container">
          <form onSubmit={handleSubmit}>
              <div className="form__group">
                <div className="input__group">
                <select id="brukere" onChange={handleBrukerChange} required>
                {brukerNrId.map((bruker, i) => (
                    <option value={bruker.brukerNr} key={i}>{bruker.fornavn} {bruker.etternavn}</option>
                ))}
            </select>
                </div>
                <p>Navn</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <select id="fasilitet" onChange={handleFasilitetChange} required>
                    {fasiliteter.map((fasilitet, i) => (
                        <option key={i}>{fasilitet.navn}</option>
                    ))}
                </select>
                </div>
                <p>Velg fasilitet </p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <select id="sone" onChange={handleSoneChange} required>
                    {soneNrId.map((sone, i) => (
                        <option value={sone.soneNr} key={i}>{sone.sonenavn}</option>
                    ))}
                </select>
                </div>
                <p>Velg Sone</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <select id="plass" onChange={handlePlassChange} required>
                    {plassNrId.map((plass, i) => (
                        <option value={plass.plassNr} key={i}>{plass.plassNr}</option>
                    ))}
                </select>
                </div>
                <p>Velg Plass</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <input type="date" id="fraDato" value={fraDato} onChange={(e) => setFraDato(e.target.value)} required />
                </div>
                <p>Legg til start-dato</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <input type="date" id="tilDato" value={tilDato} onChange={(e) => setTilDato(e.target.value)} required />
                </div>
                <p>Legg til slutt-dato</p>
              </div>
            <button type="submit">Book</button>
            </form>
            

  
          </div>
        </div>



      <section className="section__container popular__container">
      <h2 className="section__header">Våre Fasiliteter</h2>
      <div className="popular__grid">
        <div className="popular__card">
          <img src="BilderB/bobil.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Plass til bobiler</h4>
              <h4>Kr 1499</h4>
            </div>
            <p>Sone Plass, 2</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="BilderB/campingV.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Våre ledige Campingvogner</h4>
              <h4>kr 999</h4>
            </div>
            <p>Sone 2 og 3</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="BilderB/telt.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Enkelt telt og store telt</h4>
              <h4>Fra Kr 599</h4>
            </div>
            <p>Sone 4</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="BilderB/hytter.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Familie og premiuim Hytter </h4>
              <h4>KR 3449</h4>
            </div>
            <p>Sone 1</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="BilderB/hytter2.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Enkelt manns hytter</h4>
              <h4>Kr 1249</h4>
            </div>
            <p>Sone 2</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="BilderB/hytter1.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Enkelt manns hytter</h4>
              <h4>KR 1249</h4>
            </div>
            <p>Sone 2</p>
          </div>
        </div>
        </div>
      </section>

      <div className="bookingPlassLagerr" ></div>
    </>
  );
}
/*
background-image: linear-gradient(
      to right,
      rgba(44, 56, 85, 0.9),
      rgba(100, 125, 187, 0.1)
    ),
    url("./public/header.jpg");


    calc(100% - 6rem)
    */