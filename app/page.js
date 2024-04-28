"use client";

import React from "react";
import Link from "next/link";
//import React, { useEffect } from "react";


export default function Home() {
 
  return (
    <>
      

      {/* Home section design */}
      <section className="home">
        <div className="home-text">
          <h5>La oss</h5>
          <h1> Planlegge din reise sammen </h1>
          <p>Utforsk, oppdrag og føl deg hjemme under åpen himmel.</p>
          <a href="#" className="home_knapp"> Book din reise</a>
        </div>
      </section>




      <section className = "packages" id="packages">
        <h1 className="navn"> Sørlandsidyll, Aktiviteter og Kvalitetstid</h1>
          <div className="box-container">
            <div className = "box"> 
              <div className = "image">
                <img src = "Bilde/aktivitet.jpg" alt = ""/>
              </div>
            <div className = "content">
              <h3> Oppholdet Ditt  </h3>
                <p> Sommerdrømmen </p>
            <div className = "price"> 500 kr</div>
              <a href="#" className = "btn"> Les Mer Her </a>   
            </div> 
      </div>

        <div className = "box">
          <div className = "image">
            <img src = "Bilde/aktivitet2.jpg" alt = ""/>
          </div>
          <div className = "content">
            <h3> Aktiviteter </h3>
            <p> Badestrand, Minigolf, Sandvolleyball og Lekeplass</p>
          <div className = "price"> 2</div>
            <a href="#" className = "btn"> Les Mer Her </a> 
          </div> 
        </div>

      <div className = "box">
          <div className = "image">
            <img src = "Bilde/aktivitet4.jpg" alt = ""/>
          </div>
        <div className = "content">
          <h3> Butikk og Kafe  </h3>
          <p> I Resepsjonen Får Du Svar På Det Meste</p>
          <div className = "price"> </div>
          <a href="#" className = "btn"> Les Mer Her </a> 
        </div> 
      </div>
      </div>
  </section>


  {/* Om oss*/}
  <section className="about_camping">
    <img src="BilderB/Kristiansand.png" alt="img" className="image_about"/>
    <div className="about_content">
      <div className="h3"> Velkommen til Kristiansand Camping </div>
      <p> I flere generasjoner nå har KrS.Camping vær en meget godt besøkt campingplassen. Mange ønsker å legge 
          ferien sin til Sørlandet, og vi setter stor pris på. Vi er også campingplassen nærmest Dyreparken, shoppingsenter og sentrum. 
          Vi på KrS.Camping ønsker lykke til med planleggingen av årests ferie. 
          Hjertelig velkommen til oss!
      </p>
    </div>
  </section>

  {/* Map */}
  <section className="map">
    <div className="map_box">
      <Link href="/booking"><button className="map_button">Click Me</button></Link>
      <Link href="/booking"><button className="map_button2">Click Me</button></Link>
      <Link href="/booking"><button className="map_button3">Click Me</button></Link>
      <Link href="/booking"><button className="map_button4">Click Me</button></Link>
    </div>
  </section>

 


    </>

  );
}