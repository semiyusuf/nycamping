"use client"
import './utleietjenester.css';
import React, { useState, useEffect } from 'react';

export default function Utleietjeneste() {
    const [values, setValues] = useState([]);
    const [selectedService, setSelectedService] = useState({ tjenestenavn: '', pris: 0 });
    const [antall, setAntall] = useState('');
    const [reservasjonsnr, setReservasjonsnr] = useState('');
    const [receipt, setReceipt] = useState(null);

    useEffect(() => {
        fetch('/api/hent-tjeneste')
            .then((data) => data.json())
            .then((val) => setValues(val.tjenestenavnMedPris));
    }, []);

    const handleInputAntall = (event) => {
        setAntall(parseInt(event.target.value));
    }

    const handleServiceChange = (event) => {
        const selectedServiceName = event.target.value;
        const service = values.find(serv => serv.tjenestenavn === selectedServiceName);
        setSelectedService(service);
    }

    const handlePrint = async () => {
        const totalPris = selectedService.pris * antall;
        const newReceipt = `Reservasjonsnummer: ${reservasjonsnr}\nUtleietjenestenummer: ${selectedService.utleieTjenesteNr}\nTjenestenavn: ${selectedService.tjenestenavn}\nPris: ${selectedService.pris}\nAntall: ${antall}\nTotal pris: ${totalPris}`;
        setReceipt(newReceipt);
    
        try {
            const response = await fetch('/api/add-utleie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    reservasjonsnr,
                    utleieTjenesteNr: selectedService.utleieTjenesteNr,
                    antall,
                    totalPris
                })
            });
            if (response.ok) {
                console.log('Utleie added successfully.');
            } else {
                console.error('Failed to add utleie.');
            }
        } catch (error) {
            console.error('Error adding utleie:', error);
        }
    }

    return (
        <div className="container">
            <div className="form-container">
                <h1>Bestillingsform for Utleietjeneste</h1>
                <form onSubmit={handlePrint}>
                    <div className="form-group">
                        <label htmlFor="reservasjonsnr">Reservasjonsnummer:</label>
                        <input type="text" id="reservasjonsnr" name="reservasjonsnr" value={reservasjonsnr} onChange={(e) => setReservasjonsnr(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tjenestenavn">Velg tjenestenavn:</label>
                        <select onChange={handleServiceChange}>
                            {values.map((tjeneste, i) => (
                                <option key={i}>{tjeneste.tjenestenavn}</option>
                            ))}
                        </select>
                        <input type="text" value={`Pris: ${selectedService.pris}`} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="antall">Antall:</label>
                        <input type="number" id="antall" name="antall" min="1" value={antall} onChange={handleInputAntall} required />
                    </div>
                    <button type="button" onClick={handlePrint}>Bestill</button>
                    {receipt && (
                        <div className="receipt">
                            <h2>Kvittering</h2>
                            <p>{receipt}</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}