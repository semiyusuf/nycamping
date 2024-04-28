import Link from 'next/link';
//import React from 'react';
//import Translate from '../translate/page.js';

export default function Footer() {
 
  return (
    <section className="footer">
      <div className="footer-box">
        <h3>Meny</h3>
        <Link href="/">Hjem</Link>
        <Link href="#">Overnatting</Link>
        <Link href="#">Fasiliteter</Link>
        <Link href="#">Aktiviteter</Link>
      </div>

      <div className="footer-box">
        <h3>Overnatting</h3>
        <Link href="#">Hytter</Link>
        <Link href="#">Campingplass</Link>
      </div>

      <div className="footer-box">
        <h3>Hjelp</h3>
        <Link href="#">Kontakt oss</Link>
        <Link href="#">Bestill</Link>
      </div>

      <div className="footer-box">
        <h3>Følg Oss</h3>
        <Link href="#">Facebook</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Tiktok</Link>
        <div className="sosial">
          {/* Google Translate-diven */}
         
        
       
        <Link href="#"><i className="ri-instagram-fill"></i></Link>
        <Link href="#"><i className="ri-facebook-fill"></i></Link>
        </div>
      </div>
    </section>
  )
}

/*import React from 'react';
import Link from 'next/link';

 <Translate />
          <div className="google_translate_element"></div>

export default function Footer() {
  return (
    <section className="footer">
    <div className="box-container">
        <div className="box">
            <h3>Quick links</h3>
            <a href="/">Hjem</a>
            <a href="/overnatting">Overnatting</a>
            <a href="/fasiliteter">Fasiliteter</a>
            <a href="/aktivitetet">Aktiviteter</a>
            <a href="/kontakt">Kontakt Oss</a>
            <a href="/logginn">Logg inn</a>
        </div>

        <div className="box">
            <h3>extra links</h3>
            <a href="#">My account</a>
            <a href="#">My order</a>
            <a href="#">My wishlist</a>
            <a href="#">ask questions</a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#"><i className="fas fa-phone"></i> 23412132</a>
        </div>

        <div className="box">
            <h3>Follow us</h3>
            <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
        </div>
    </div> 
</section>

  );
};
*/

/*import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
    <section className="footer">
      <div className="footer-box">
        <h3>Meny</h3>
        <Link href="#">Hjem</Link>
        <Link href="#">Overnatting</Link>
        <Link href="#">Fasiliteter</Link>
        <Link href="#">Aktiviteter</Link>
      </div>

      <div className="footer-box">
        <h3>Overnatting</h3>
        <Link href="#">Hytter</Link>
        <Link href="#">Campingplass</Link>
      </div>

      <div className="footer-box">
        <h3>Hjelp</h3>
        <Link href="#">Kontakt oss</Link>
        <Link href="#">Bestill</Link>
      </div>

      <div className="footer-box">
        <h3>Følg Oss</h3>
        <div className="social">
          <Link href="#"><i className="ri-instagram-fill"></i></Link>
          <Link href="#"><i className="ri-facebook-fill"></i></Link>
        </div>
      </div>
    </section>
    </div>
  );
};*/

