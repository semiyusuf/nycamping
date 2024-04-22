//import prisma from '@/lib/prisma';
import './bruker.css'
import { getPosts } from '../api/get-bruker/route'
//import { middleware } from '../api/cookieVerdi/route'
import { getUserEmail } from '../../utils';
//import middleware from '../../middleware';


export default async function Home() {
  
  //const userEmail = await getUserEmail();
  const email = 'ali1212@live.no'
  const epost = email
  //const cookieValue = await middleware();
  //const epost = cookieValue
  const posts = await getPosts(epost);

  return (
    <main className="ms">
      <h1>Logged inn bruker</h1>
      {/* Assuming posts is an array of bruker objects */}
      {posts.map(bruker => (
        <div key={bruker.brukerNr}>
          <p>Fornavn: {bruker.fornavn}</p>
          <p>Etternavn: {bruker.etternavn}</p>
          <p>Epost: {bruker.epost}</p>
        </div>
      ))}
    </main>
  );
}

// Assuming you want to fetch posts for a specific email address
  //const cookieValue = request.cookies.get('userEmail');
  //console.log(cookie);
  //const epost = 'ali1212@live.no'; // Replace with the actual email address
  
  //const cookie = request.cookies.get('userEmail');
  //console.log('cookie', cookie);

  //const epost = cookie ? cookie.value : 'ali1212@live.no'; // Replace with the actual email address if cookie exists
  //const posts = await getPosts(epost);
  //yusuf.salad.yusuf@gmail.com
  //ali1212@live.no
  //let verdi = cookieValue
/*
async function getC(request) {
  const cookieValue = await middleware(request);
  console.log('assadasd', cookieValue)
  return cookieValue
}


import { PrismaClient } from "@/prisma/generated/client";
import prisma from '@/lib/prisma'

async function getPosts() {
  const posts = await prisma.bruker.findMany ({
    where: {epost: epost}
  })
  return posts;
  }

  export default async function Home() {
    const posts = await getPosts();
    return (
      <main className="ms">
        <h1>Logged inn bruker</h1>
        key={bruker.brukerNr}
        fornavn={bruker.fornavn}
        etternavn={bruker.etternavn}
        epost={bruker.epost}

      </main>
    )
  }





"use client"
import { useEffect, useState } from 'react';
import './bruker.css';
//import { getUserByEmail } from '../api/get-bruker/route'; // Import the getUserByEmail function

export default function BrukerPage() {
  // State to hold user data
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Fetch user details using the userEmail
      const userEmail = 'ali1212@live.no'; // Replace with the actual user's email
      try {
        const response = await fetch(`/api/get-bruker?email=${userEmail}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }

    fetchData(); // Call the fetchData function inside useEffect
  }, []); // Empty dependency array ensures the effect runs only once

  // Render the component
  return (
    <div className="ms">
      <h1>BOMBACLAT</h1>
      {user && (
        <div>
          <p>User Details:</p>
          <p>First Name: {user.fornavn}</p>
          <p>Last Name: {user.etternavn}</p>
          <p>Email: {user.epost}</p>
          {/* Add more user details here *}
        </div>
      )}
    </div>
  );
}


/*
try {
        const userData = await getUserByEmail(userEmail);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }


/ Initialize userDetails state variable
      const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        async function fetchData() {
            // Fetch user details using the cookie
            const userEmail = document.cookie.replace(/(?:(?:^|.*;\s*)userEmail\s*=\s*([^;]*).*$)|^.*$/, "$1");
            try {
                const response = await fetch('/api/get-bruker', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userEmail })
                });
                const data = await response.json();
                setUserDetails(data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        }
        fetchData();
    }, []);

{userDetails && (
            <div>
                <p>User Details:</p>
                <p>First Name: {userDetails.fornavn}</p>
                <p>Last Name: {userDetails.etternavn}</p>
                <p>Email: {userDetails.epost}</p>
                {/* Add more user details here }



<div className="ms">
                <h1>BOMBACLAT</h1>
            </div>
*/
