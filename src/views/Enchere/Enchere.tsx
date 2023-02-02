import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

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


const Enchere: React.FC<ContainerProps> = ({
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
}) => {

    const history = useHistory();

    function btnOnClick(idproduit: any) {
        history.push(`/encheres/${idproduit}`);
    }

    return (
<>
        <img
            src={produit.image[0]}
            alt="" />
                </IonAvatar >
        <h2>{produit.description}</h2>
        <p>Début: {dateheure}</p>
        <p>Durée: {duree} mn</p>
        <p>Prix Minimal: {prix_minimal}</p>
        <button onClick={() => btnOnClick(idproduit)}>Plus de détails</button>

        </> );

};

        export default Enchere;
