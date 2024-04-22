//import { fetchData } from './utilFunc/api';
import { accessToken } from '../../logginn-bruker/route';


export default async function Brukere({brukerNr, fornavn, etternavn, epost, telefon ,passord, reservasjoner}){
    // Example usage:
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/api/logginn-bruker', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const data = await response.json();
            console.log(data); // Example: Log the fetched data
        }
        fetchData();
    }, [accessToken]); // Fetch data whenever accessToken changes
    return (
    <div style={{border: '1px solid white', padding: '15px', margin: '10px 0px'}}>
        <h3>{brukerNr}</h3>
        <h4>{etternavn}</h4>
        <p>{fornavn}</p>
        <p>{epost}</p>
        <p>{telefon}</p>
        <p>{passord}</p>
        <p>{reservasjoner}</p>
    </div>
    )
}

