/*"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import './style.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Kvittering (){
  const [kvittering, setKvittering] = useState('');
  const [feilmelding, setFeilmelding] = useState('');

  useEffect(() => {
    const hentKvittering = async () => {
      try {
        const response = await fetch('/api/kvittering', {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Kunne ikke hente kvitteringsinformasjon');
        }
        const data = await response.json();
        setKvittering(data.kvittering);
      } catch (error) {
        console.error('Feil ved henting av kvittering:', error.message);
        setFeilmelding('Feil ved henting av kvittering');
      }
    };

    hentKvittering();
  }, []);

  // Konsolllogg for kvittering og feilmelding
  console.log('Kvittering:', kvittering);
  console.log('Feilmelding:', feilmelding);

  return (
    <><div>
          <h1>Kvittering</h1>
          {kvittering ? (
              <p>{kvittering}</p>
          ) : (
              <p>{feilmelding || 'Laster...'}</p>
          )}
          <div className="row">
      <div className="col-md-4 mt-1">
        <div className="card text-center sidebar" style={{ backgroundColor: 'lightgrey', height: '600px' }}>
          <div className="card-body">
          <img src="/avatar-male.jpg" className="rounded-circle w-40 mx-auto" alt="Profile Image" />
            <div className="mt-3">
              <h3 className="text-lg">Yusuf salad Yusuf</h3>
              <Link href="" className="block mt-4">Hjem</Link>
              <Link href="" className="block">Kontakt Oss</Link>
              <Link href="" className="block">Hjelp</Link>
              <Link href="" className="block">Instillinger</Link>
              <Link href="" className="block">Logg Ut</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 mt-1">
        <div className="card mb-3 content m-3 bg-gray-200">
          <h1 className="m-3 pt-3">OM</h1>
          <div className="card-body">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h5>Fullt Navn</h5>
              </div>
              <div className="col-span-2 text-secondary">
                Yusuf Salad Yusuf
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h5>Email</h5>
              </div>
              <div className="col-span-2 text-secondary">
                abc@gmail.com
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h5>Mobil</h5>
              </div>
              <div className="col-span-2 text-secondary">
                934 54 112
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h5>Adresse</h5>
              </div>
              <div className="col-span-2 text-secondary">
                oppihimmelen 61D
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 content m-3 bg-gray-200">
          <h1 className="m-3">Overnattinger</h1>
          <div className="card-body">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <h5>Booking Dato</h5>
              </div>
              <div className="text-secondary">
                Fasilitet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
      );
    }*/
