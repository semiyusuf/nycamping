"use client"
import { useEffect, useState } from 'react';
import './kvittering.css';


export default function Kvittering (){
  const [kvittering, setKvittering] = useState('');
  const [feilmelding, setFeilmelding] = useState('');

  useEffect(() => {
    const hentKvittering = async () => {
      try {
        const response = await fetch('/api/kvittering');
        if (!response.ok) {
          throw new Error('Kunne ikke hente kvitteringsinformasjon');
        }
        const data = await response.json();
        setKvittering(data.reservasjon); // Oppdatert til Ã¥ hente 'reservasjon' fra data
      } catch (error) {
        console.error('Feil ved henting av kvittering:', error.message);
        setFeilmelding('Feil ved henting av kvittering');
      }

      
    };

    hentKvittering();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>Kvittering</h1>
        {kvittering ? (
          <div>
            <p>Bruker: {kvittering.bruker ? `${kvittering.bruker.fornavn} ${kvittering.bruker.etternavn}` : 'Ikke tilgjengelig'}</p>
            <p>Sone: {kvittering.sone ? kvittering.sone.sonenavn : 'Ikke tilgjengelig'}</p>
            <p>Plass: {kvittering.plass && kvittering.plass.fasilitet ? kvittering.plass.fasilitet.navn : 'Ikke tilgjengelig'}</p>
            <p>Plassnummer: {kvittering.plass && kvittering.plass.plassNr ? kvittering.plass.plassNr : 'Ikke tilgjengelig'}</p>
            <p>Fra dato: {kvittering && kvittering.fraDato ? kvittering.fraDato : 'Ikke tilgjengelig'}</p>
            <p>Til dato: {kvittering && kvittering.tilDato ? kvittering.tilDato : 'Ikke tilgjengelig'}</p>

          </div>
        ) : (
          <p>Laster inn...</p>
        )}
        {feilmelding && <p>{feilmelding}</p>}
      </div>
      <div></div>
    </div>
  );
};