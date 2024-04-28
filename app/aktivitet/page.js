import React from 'react';
import './aktivitet.css';
import Link from "next/link";

function Overnatting() {
    return (
        <>
          {/* Home section design */}
          <section className="Ahome">
            <div className="Ahome-text">  
            </div>
          </section>
  
          {/* Kategori */}
          <h1 className="Aheading">Mer enn hundre aktiviteter ute og inne</h1>
          <div className="Acenter">
            <div className="Acontainer">
              <img src="Bilde/aktivitet2.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayLeft">
                <div className="Atext">Minigolf</div>
                <div className='p'> Minigolf - en fin familieaktivitet som passer for alle aldre. </div>
              </div>
              
            </div>
  
            <div className="Acontainer">
              <img src="Bilde/aktivitet.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayFade">
                <div className="Atext">Kanopadling</div>
                <div className='p'> Kanopadling - er ikke bare en aktivitet, det er en reise inn i det naturlige og det ukjente</div>
              </div>
            </div>
  
            <div className="Acontainer">
              <img src="Bilde/fotball.jpg" alt="Fotball" className="image" />
              <div className="Aoverlay AoverlayRight">
                <div className="Atext">Fotballbinge</div>
                <div className='p'> Ballbinge er perfekt for fotballentusiaster i alle aldre. Sjekk aktivitetsprogrammet for organiserte turneringer.  </div>
              </div>
            </div>
          </div>
  
          <div className="Acenter2">
            <div className="Acontainer">
              <img src="Bilde/volleyball.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayLeft">
                <div className="Atext">Sandvollyball</div>
                <div className='p'> Nyt våre tre Sandvollyballbaner med høy kvalitet på sanden. Rundt vollyballbane er det ofte god sommerstemming.  </div>
              </div>
            </div>
  
            <div className="Acontainer">
              <img src="Bilde/aktivitet4.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayFade">
                <div className="Atext">Badestrand</div>
                <div className='p'> Nyt en av Kristiansand fine strender med vanntrampoline og stupebrett.  </div>
              </div>
            </div>
  
            <div className="Acontainer">
              <img src="BilderB/lekeplass.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayRight">
                <div className="Atext">Lekeplass</div>
                <div className='p'> Vår lekeplass byr på blant annet klatretårn, hoppepute, vannsklie og rutsjebane.  </div>
              </div>
            </div>
          </div>

          <div className="Acenter3">
            <div className="Acontainer">
              <img src="BilderB/bordtennis.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayLeft">
                <div className="Atext">Bordtennis og utendørs skufflebane</div>
                <div className='p'>For å spille bordtennis og utenførs skufflebane kan man enten ta med eget utsyr, eller kjøpe/leie av oss i resepsjonen. </div>
              </div>
            </div>

            <div className="Acontainer">
              <img src="BilderB/aktivnerheten.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayLeft">
                <div className="Atext"> Aktiviteter i nærområdet </div>
                <div className='p'> Se alle de spørsmål opplevelsene som venter på deg i nærområdet.</div>
                
                
                  <a href="https://www.visitsorlandet.com/destinasjoner/kristiansand/opplevelser-i-kristiansand/" className="button"> Oppdag mer</a>
               
              </div>
            </div>

            <div className="Acontainer">
              <img src="BilderB/sommerstemning.jpg" alt="img" className="image" />
              <div className="Aoverlay AoverlayLeft">
                <div className="Atext"> Hva skjer? </div>
                <div className='p'> Sjekk alt det gøye som skjer hos oss i sommer.  </div>
              </div>
            </div>



          </div>  

          <div className="Ahome-text">
              <Link href="/utleietjenester" className="Abtn">
                Bestill Aktivitet
                </Link> 
            </div>


          
          </>
    );
  }
  
  export default Overnatting;