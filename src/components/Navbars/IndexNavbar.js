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
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

export default function IndexNavbar() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [collapseOut, setCollapseOut] = React.useState("");
    const [color, setColor] = React.useState("navbar-transparent");
    React.useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return function cleanup() {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    const changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            setColor("bg-info");
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            setColor("navbar-transparent");
        }
    };
    const toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(!collapseOpen);
    };
    const onCollapseExiting = () => {
        setCollapseOut("collapsing-out");
    };
    const onCollapseExited = () => {
        setCollapseOut("");
    };
    const scrollToDownload = () => {
        document
            .getElementById("download-section")
            .scrollIntoView({ behavior: "smooth" });
    };
    const history = useHistory();
    const listeEnchere = async () => {

        try {

            const response = await axios.post(`https://wsenchere.up.railway.app/PasFini`, {});
            if (response.status === 200) {
                console.log(response.data);
                const data = response.data;

                if (response.data.code === 202) {
                    history.push(`/ListeEnchere`);
                }
                if (response.data.code === 404) {
                    history.push(`/accueil`);

                }
            } else {
                console.log("Loading");
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/" tag={Link} id="navbar-brand">
                        <span>Enchère• </span>
                        ETU 1679, 1509, 1479
                    </NavbarBrand>
                    <UncontrolledTooltip placement="bottom" target="navbar-brand">
                        SAMPILAHY Heriniavo Tiany
                        RAZAFINDRAKOTOSON Maphie
                        RANDRIAMANALINA Anja
                    </UncontrolledTooltip>
                    <button
                        aria-expanded={collapseOpen}
                        className="navbar-toggler navbar-toggler"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    className={"justify-content-end " + collapseOut}
                    navbar
                    isOpen={collapseOpen}
                    onExiting={onCollapseExiting}
                    onExited={onCollapseExited}
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Enchères•
                                </a>
                            </Col>
                            <Col className="collapse-close text-right" xs="6">
                                <button
                                    aria-expanded={collapseOpen}
                                    className="navbar-toggler"
                                    onClick={toggleCollapse}
                                >
                                    <i className="tim-icons icon-simple-remove" />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle
                                caret
                                color="default"
                                data-toggle="dropdown"
                                href="#pablo"
                                nav
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="fa fa-cogs d-lg-none d-xl-none" />
                                Pages
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-with-icons">
                                <DropdownItem tag={Link} to="/ListeEnchere">
                                    <i className="tim-icons icon-bullet-list-67" />
                                    Liste des enchères
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/inscription">
                                    <i className="tim-icons icon-bullet-list-67" />
                                    inscription
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/login">
                                    <i className="tim-icons icon-image-02" />
                                    Login
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/recharger">
                                    <i className="tim-icons icon-single-02" />
                                    recharger
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/loginUser">
                                    <i className="tim-icons icon-single-02" />
                                    login User
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Button
                                className="nav-link d-none d-lg-block"
                                color="default"
                                tag={Link} to="/login"
                            >
                                <i className="tim-icons icon-cloud-download-93" /> Se connecter
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
