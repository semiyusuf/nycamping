"use client";

import './style.css'; // Import the CSS file

export default function KontaktSide() {
    return (
        <section className="contact">
            <div className="content">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" itegrity="
sha384-wvFXpqpZZVQGK6TAh5PVIGOfQNHSoD2xbE+QKPxCAFINEevoEH3SI0sibVcQQVnN" crossOrigin="anonymous"></link>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Adressen</h3>
                            <p>5363 Campus bø, <br /> Midt, Telemark, <br /> 373838</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Tlf</h3>
                            <p>507-027-6004</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>Random@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                <form action="https://formsubmit.co/applikasjon2722@gmail.com" method="POST">
                        <h2> Send melding</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Ditt fulle navn</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"></textarea>
                            <span>Skriv inn meldingen din...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="" value="send" />
                        </div>
                    </form>
                </div>
                </div>
        </section>
    );
}
