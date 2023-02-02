import React from "react";
import {useHistory} from "react-router-dom";

interface ContainerProps {
    idenchere: any,
    idcategorieenchere: any,
    idutilisateur: any,
    idproduit: any,
    dateheure: any,
    prix_minimal: any,
    duree: any,
    prixFinal: any,
    idGagnant: any,
    produit: any
}

const Enchere = ({
                     idenchere,
                     idcategorieenchere,
                     idutilisateur,
                     idproduit,
                     dateheure,
                     prix_minimal,
                     duree,
                     prixFinal,
                     idGagnant,
                     produit
                 }: ContainerProps) => {
    const history = useHistory();

    const handleClick = (idproduit) => {
        history.push(`/encheres/${idproduit}`);
    };

    return (
        <div>
            <img
                src={produit.image[0]}
                alt=""
            />
            <h2>{produit.description}</h2>
            <p>Début: {dateheure}</p>
            <p>Durée: {duree} mn</p>
            <p>Prix Minimal: {prix_minimal}</p>
            <button onClick={() => handleClick(idproduit)}>Plus de détails</button>
        </div>
    );
};

export default Enchere;
