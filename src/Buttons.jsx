import React from 'react'
import languages from './components/data/languages'

function Buttons() {
    return (<>
        <div>
            {languages.map((language) => (
                <button>
                    <h3>{language.title}</h3>
                </button>
            ))}
        </div>
        <label className='card'> ciao</label>
    </>
    )
}

export default Buttons