import React from 'react'

import { useState } from 'react'
import languages from './data/languages';

function Buttons() {
    //creo uno stato isOpen per tenere traccia dell'id selezionato
    //useState(languages[0]) isOpen mostra le card dell'array
    const [isOpen, setIsOpen] = useState(languages[0]);


    return (
        <>
            {/* `button */}
            <div>
                {languages.map((language) => (
                    //assegno id come key a button e creo evento click impostando id selezionato
                    <button
                        key={language.id}
                        onClick={() => setIsOpen(language)}
                        style={{
                            //operatore terniario: se isOpen è uguale a language allora giallo altimenti blue
                            backgroundColor: isOpen === language ? '#e1b917' : '#1472f6'
                        }}
                    >
                        <h3>{language.title}</h3>
                    </button>
                ))}

            </div>
            {/* `card */}

            <label className='card'>
                <h3>{isOpen.title}</h3>
                <p>{isOpen.description}</p></label>

        </>
    )
}

export default Buttons



