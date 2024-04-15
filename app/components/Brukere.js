export default function Brukere({brukerNr, fornavn, etternavn, epost, telefon ,passord, reservasjoner}){
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