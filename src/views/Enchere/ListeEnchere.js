// import React from "react";
import React, { useEffect, useState } from 'react';
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
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
import Enchere from "Enchere";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import bigChartData from "variables/charts.js";

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
      <ExamplesNavbar />
      <div className="wrapper">
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
        <section className="section section-lg section-coins">
          {/* <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          /> */}
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Les encheres{" "}
                  <span className="text-info">sur le marche</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Light Coin</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>50 messages</ListGroupItem>
                        <ListGroupItem>100 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>


            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
