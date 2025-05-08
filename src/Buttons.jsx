import React from 'react'
import languages from './components/data/languages'
import { useState } from 'react'

function Buttons() {

    const [isOpen, setIsOpen] = useState(false);
    const cardLanguage = languages.find(language => language.id === isOpen)
    return (
        <>
            <div>
                {languages.map((language) => (
                    <button key={language.id} onClick={() => setIsOpen(language.id)}>
                        <h3>{language.title}</h3>
                    </button>
                ))}

            </div>
            {cardLanguage && (
                <label className='card'>
                    <h3>{cardLanguage.title}</h3>
                    <p>{cardLanguage.description}</p></label>
            )}
        </>
    )
}

export default Buttons



