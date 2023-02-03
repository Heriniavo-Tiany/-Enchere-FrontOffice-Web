/* eslint-disable no-undef */
import React from "react";
import {useHistory} from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row
} from "reactstrap";

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

    function btnOnClick(idproduit: any) {
        history.push(`/encheres/${idproduit}`);
        // console.log(`/encheres/${idenchere}`);
    }

    return (
        <>

            <section className="section section-lg section-coins">
                {/*<Container>*/}
                {/*    <Row>*/}
                {/*        <Col md="4">*/}
                            <Card className="card-coin card-plain">
                                <CardHeader>
                                    <img
                                        alt="..."
                                        className="img-center img-fluid"
                                        src={produit.image[0]}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col className="text-center" md="12">
                                            <h4 className="text-uppercase">{produit.description}</h4>
                                            <span>Etat</span>
                                            <hr className="line-primary" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <ListGroup>
                                            <ListGroupItem>Début: {dateheure}</ListGroupItem>
                                            <ListGroupItem>Durée: {duree} mn</ListGroupItem>
                                            <ListGroupItem>Prix Minimal: {prix_minimal}</ListGroupItem>
                                        </ListGroup>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-center">
                                <button onClick={() => btnOnClick(idenchere)}>rencherir</button>
                                       
                                </CardFooter>
                            </Card>
                        {/*</Col>*/}


                {/*    </Row>*/}
                {/*</Container>*/}
            </section>


        </>
    );
};

export default Enchere;
