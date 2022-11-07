import React, { useState } from 'react'



const Conpteur = () => {

    const [chiffre, setchiffre] = useState(0);

    const affiche = () => {
        setchiffre(0);

    }

    const ajouter = () => {

        setchiffre(chiffre + 1);

    }

    const soustraire = () => {

        setchiffre(chiffre - 1);

    }

    const reinitialiser = () => {

        setchiffre(0);

    }



    return (
        <>
            <h1>{chiffre}</h1>

            < div className="cont" >
                <button className="btn-soustraire" onClick={soustraire}>moins</button>

                <button className="btn-reinitialiser" onClick={reinitialiser}>Reset</button>

                <button className="btn-ajouter" onClick={ajouter}>plus</button>
            </div >
        </>
    )
}

export default Conpteur