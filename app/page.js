import React from "react";
import prisma from '@/lib/prisma'
import Brukere from './/components/Brukere'; // Adjust the path as per your file structure
import styles from './page.module.css'



async function getBrukere() {
  const bruker = await prisma.bruker.findMany( {
    where: {brukerNr: 1},
    /*include: {
      fornavn: {
        select: {etternavn: true}
      }
    }*/
  })
  return bruker;
}


export default async function () {
  const bruken = await getBrukere();
  console.log({bruken})
  return (
    <main className={styles.main}>
      <div className="lpHjemme">
      <h1>VELKOMMEN</h1>
      {
    bruken.map((bruken) => {
    return (
      <Brukere
      key={bruken.brukerNr}
      id={bruken.brukerNr}
      brukerNr={bruken.brukerNr}
      etternavn={bruken.etternavn}
      epost={bruken.epost}
      telefon={bruken.telefon}
      />
    )
  })
}
      </div>
    </main>

  
  )
}

//import { PrismaClient } from './prisma/generated/client'
//const prisma = new PrismaClient()