/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-globals */
/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { useHistory } from "react-router-dom";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";


// var mess = "valider";
export default function ProfilePage() {
  var mess = document.getElementById('mess');
  const [montant, setMontant] = useState('');
  const [iduser, setUser] = useState('');
  // const [id, setId] = React.useState(null)
  const { id } = useParams()
  const btnOnClick = async () => {
    console.log(id);
    if (sessionStorage.getItem("id") === undefined) {
      console.log("connecte toi d'abord")
    } else {
      setUser(sessionStorage.getItem("id"))

      const params = {
        prix: montant,
        iduser: iduser,
        idenchere: id
      };
      try {
        const response = await axios.post(`https://wsenchere.up.railway.app/NewRenchere`, {}, { params });
        if (response.status === 200) {
          console.log(response.data);
          const data = response.data;
          mess.innerHTML = response.data['msg'];

          // console.log(mess);
          if (response.data.code === 202) {
            history.push(`/encheres`);
          }

          if (response.data.length === 1) {
            history.push(`/rencherir`);
          } else {
            if (response.data === "Mise insérer") {
              mess.innerHTML = response.data;
            }
            else{
              mess.innerHTML=response.data['msg'];
            }
            history.push(`/encheres/${id}`);
          }

        } else {
          mess.innerHTML = "loading"
        }
      }
      catch (error) {
        console.log(error);
        console.log("fini");
      }

    }
  };

  let ps = null;

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">


        <section className="section">

          <Container>

            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <h1 className="profile-title text-left">rencherir</h1>
                  <h5 className="text-on-back">0</h5>
                </CardHeader>
                <CardBody>
                  <Form>

                    <Col md="6">
                      <FormGroup>
                        <label>montant de la surencheres</label>
                        <Input defaultValue="Mike" type="number" onChange={(e) => setMontant(e.target.value)} />
                      </FormGroup>
                    </Col>
                    <p id="mess"> </p>
                    <Button
                      className="btn-round float-right"
                      color="primary"
                      data-placement="right"
                      id="tooltip341148792"
                      type="button" onClick={() => btnOnClick()}
                    >
                      Send text
                    </Button>

                  </Form>
                </CardBody>
              </Card>
            </Col>


          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
