"use client";
import React, { useState } from 'react'
import Link from "next/link";
import Validation from './LoginValidation';
import './logginn.css';


export default function Logginn() {
    const [values, setValues] = useState({
        email: '',
        passord: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

  return (
    <>
      <div className="logginn">
      <div className="logginnbox">
         <h1>Logg inn</h1>
    <form action="" onSubmit={handleSubmit}>
    <div className="inputbox">
        <label><strong>Email</strong></label>
        <input type="text" placeholder='Skriv inn email' name='email'
        onChange={handleInput}/>
        {errors.email && <span className='text-danger'> {errors.email}</span>}
    </div>
    <div className="inputbox">
        <label><strong>Passord</strong></label>
        <input type="text" placeholder='Skriv inn passord' name='passord' 
        onChange={handleInput}/>
        {errors.passord && <span className='text-danger'> {errors.passord}</span>}

    </div>
    <div className="inputbox">
    <button type="submit">Logg inn</button>
</div>
    <div className="registrering-link">
        <p>Har du ikke bruker?</p> <Link href="/registrer">Registrer deg nå</Link>
    </div>

    </form>
    </div>
    </div>
    </>
  );
}