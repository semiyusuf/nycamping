//import React from 'react';
"use client"
import React, { useState } from 'react';
import './styleF.css'; // Import your CSS file here
//import axios from 'axios';

export default function Booking() {

  return (
    <>
    <div className="bookingPlassLager" ></div>
        <div className="header__image__container">
          <div className="header__content">
            <h1>Nyt sesongene i moderne fasiliteter</h1>
            <p>Book Hytter, Campingvogner, Telt og annet utstyr.</p>
          </div>
          <div className="booking__container">
          <form /*onSubmit={handleSubmit}*/>
              <div className="form__group">
                <div className="input__group">
                  <input type="text"/>
                  <label>Bruker</label>
                </div>
                <p>Navn</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <input type="text" name="sone" />
                  <label>Sone</label>
                </div>
                <p>Område dere skal sove på </p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <input type="text" name="plassNr" />
                  <label>Plass nr</label>
                </div>
                <p>Legg til Fasilitet</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <input type="text" name="checkIn"/>
                  <label>Check In</label>
                </div>
                <p>Legg til dato</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                <input type="text" name="checkOut"/>
                  <label>Check Out</label>
                </div>
                <p>Legg til dato</p>
              </div>
            </form>
            <button type="submit" className="btn"><i className="ri-search-line"></i></button>
          </div>
        </div>

      {/* seksjon */}

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
    */