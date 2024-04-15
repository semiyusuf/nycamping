"use client";
//import Validation from './signupValidation';
import React, { useState } from 'react'
import '../logginn/logginn.css'; //for å gå ut av registrer mappen og inn i logginn mappen også inn logginn.css filen


export default function Registrer() {
    const [fornavn, setFornavn] = useState('');
    const [etternavn, setEtternavn] = useState('');
    const [epost, setEpost] = useState('');
    const [telefon, setTelefon] = useState('');
    const [passord, setPassord] = useState('');

    const handleInputFornavn = (event) => {
        setFornavn(event.target.value);
    }
    const handleInputEtternavn = (event) => {
        setEtternavn(event.target.value);
    }
    const handleInputEpost = (event) => {
        setEpost(event.target.value);
    }
    const handleInputTelefon = (event) => {
        setTelefon(event.target.value);
    }
    const handleInputPassord = (event) => {
        setPassord(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('/api/add-bruker', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({fornavn, etternavn, epost, telefon, passord})

            })
        }catch(error) {
            console.error(error)
        }

        setFornavn('');
        setEtternavn('');
        setEpost('');
        setTelefon('');
        setPassord('');

    }


 
  return (
    <>
      <div className="logginn">
      <div className="logginnbox">
         <h1>Registrer deg nå</h1>
    <form action="" onSubmit={handleSubmit}>
    <div className="inputbox">
    <label><strong>Fornavn</strong></label>
        <input type="text" id="fornavn" value={fornavn} placeholder='Fyll inn fornavn' onChange={handleInputFornavn} required/>
       

    </div>
    <div className="inputbox">
    <label><strong>Etternavn</strong></label>
        <input type="text" placeholder='Fyll inn etternavn' name='etternavn' onChange={handleInputEtternavn}  required/>
        

    </div>
    <div className="inputbox">
    <label><strong>Email</strong></label>
        <input type="text" placeholder='Fyll inn email' name='email' onChange={handleInputEpost}  required/>
        

    </div>
    <div className="inputbox">
    <label><strong>Telefon</strong></label>
        <input type="text" placeholder='Fyll inn telefonnummer' name='telefon' onChange={handleInputTelefon}  required/>
        

    </div>
    <div className="inputbox">
    <label><strong>Passord</strong></label>
    <input type="text" placeholder='Fyll inn passord' name='passord' onChange={handleInputPassord} required/>
        
        

    </div>
    <div className="inputbox">
    <button type="submit">Registrer deg</button>
    </div>
    
    </form>
    </div>
    </div>
    </>
  );
}
