import Link from "next/link";
import React from 'react';

export default function Header() {
  return (
    <div className="navbarDiv">
      <header className="header">
        <Link href="#" className="logo"><i className="fas fa-hiking"></i> Krs Camping.</Link>
        <nav className="navbar">
          <div id="nav-close" className="fas fa-times"></div>
          <Link href="/">Home</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/bruker">Fasiliteter</Link>
          <Link href="/aktiviteter">Aktiviteter</Link>
          <Link href="/kontakt">Kontakt Oss</Link>
          <Link href="/logginn">Logg inn</Link>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
        </div>
      </header>
    </div>
  );
}



/*import Link from "next/link";
import React from 'react';

export default function Header() {
  return (
    <div className="navbarDiv">
      <header className="header">
        <Link href="#" className="logo"><i className="fas fa-hiking"></i> Krs Camping.</Link>
        <nav className="navbar">
          <div id="nav-close" className="fas fa-times"></div>
          <Link href="/">Hjem</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/booking">Fasiliteter</Link>
          <Link href="#aktiviteter">Aktiviteter</Link>
          <Link href="#kontakt">Kontakt Oss</Link>
          <Link href="/logginn">Logg inn</Link>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="search-btn" className="fas fa-search"></div>
        </div>
      </header>

      {/* Search form /}
      <div className="search-form">
        <div id="close-search" className="fas fa-times"></div>

        <form action="">
          <input type="search" name="" placeholder="Søk her..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </div>
    </div>
  );
}*/



