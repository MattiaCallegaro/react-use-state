import React from 'react'
import languages from './components/data/languages'
import { useState } from 'react'

function Buttons() {
    //creo uno stato isOpen per tenere traccia dell'id selezionato
    //useState(false) isOpen non mostra le card
    const [isOpen, setIsOpen] = useState(false);
    // tramite metodo find mi trovo id con valore isOpen
    const cardLanguage = languages.find(language => language.id === isOpen)
    return (
        <>
            {/* `button */}
            <div>
                {languages.map((language) => (
                    //assegno id come key a button e creo evento click impostando id selezionato
                    <button key={language.id} onClick={() => setIsOpen(language.id)}>
                        <h3>{language.title}</h3>
                    </button>
                ))}

            </div>
            {/* `card */}
            {/* se trovo un id corrispondente allora isOpen */}
            {cardLanguage && (
                <label className='card'>
                    <h3>{cardLanguage.title}</h3>
                    <p>{cardLanguage.description}</p></label>
            )}
        </>
    )
}

export default Buttons



