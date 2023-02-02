// import React from "react";
import React, {useEffect, useState} from 'react';
// react plugin used to create charts
// reactstrap components
import "./listeEnchere.css"
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import axios from "axios";
// import Enchere from "Enchere";
// core components
import Footer from "components/Footer/Footer.js";
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import Enchere from "../../components/Enchere";
import IndexNavbar from "../../components/Navbars/IndexNavbar";

export default function LandingPage() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios(`https://wsenchere.up.railway.app/PasFini`)
            .then((response) => {
                setData(response.data);
                setError(null);
            })
            .catch(setError);

    }, []);
    if (error) return <p>An error occurred</p>


    return (
        <>
            <IndexNavbar/>
            <div className="wrapper">
                <br/><br/><br/>
                <Container>
                    <Row>
                        <Col md="4">
                            <hr className="line-info"/>
                            <h1>
                                Les encheres{" "}
                                <span className="text-info">sur le marche</span>
                            </h1>
                        </Col>
                    </Row>
                </Container>

                <div className="parent">
                    {
                        data.map(({
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
                                  }) => (
                            < Enchere
                                idenchere={idenchere}
                                idcategorieenchere={idcategorieenchere}
                                idutilisateur={idutilisateur}
                                idproduit={idproduit}
                                dateheure={dateheure}
                                prix_minimal={prix_minimal}
                                duree={duree}
                                prixFinal={prixFinal}
                                idGagnant={idGagnant}
                                produit={produit}
                            />
                        ))
                    }
                </div>
                <Footer/>
            </div>
        </>
    );
}
