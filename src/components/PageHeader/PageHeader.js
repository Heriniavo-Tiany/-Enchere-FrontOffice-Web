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
import React from "react";

// reactstrap components
import {Button, Container} from "reactstrap";
import {useHistory} from "react-router-dom";

export default function PageHeader() {

    const history = useHistory();

  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Enchères</h1>
          <h3 className="d-none d-sm-block">
              Enchérissez sur des objets rares et exclusifs sur notre plateforme de vente aux enchères en ligne.
          </h3>

            <Button
                className="btn-round" color="primary" type="button"
                onClick={() => history.push("/ListeEnchere") }
            >
                Liste des Enchères
            </Button>

        </div>
      </Container>
    </div>
  );
}
