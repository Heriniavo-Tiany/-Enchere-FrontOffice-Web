import React, {useState} from "react";
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../config";

export default function Login() {
    const [squares1to6, setSquares1to6] = React.useState("");
    const [squares7and8, setSquares7and8] = React.useState("");
    const [fullNameFocus, setFullNameFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);
    const [contactFocus, setContactFocus] = React.useState(false);

    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [contact, setContact] = useState('')
    const history = useHistory();

    React.useEffect(() => {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", followCursor);
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("register-page");
            document.documentElement.removeEventListener("mousemove", followCursor);
        };
    }, []);
    const followCursor = (event) => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        setSquares1to6(
            "perspective(500px) rotateY(" +
            posX * 0.05 +
            "deg) rotateX(" +
            posY * -0.05 +
            "deg)"
        );
        setSquares7and8(
            "perspective(500px) rotateY(" +
            posX * 0.02 +
            "deg) rotateX(" +
            posY * -0.02 +
            "deg)"
        );
    };

    const login = async () => {

        const params = {
            email: email,
            mdp: pwd,
        };


        try {
            console.log(email);
            const response = await axios.post(`https://wsenchere.up.railway.app/Admin`, {}, { params });
            if (response.status === 200) {
                console.log(response.data);
                const data = response.data;

                if(response.data.code === 202){
                    history.push(`/encheres`);
                }
                if(response.data.code === 404){
                    history.push(`/login`);

                }
            }else{
                console.log("Loading");
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ExamplesNavbar/>
            <div className="wrapper">
                <div className="page-header">
                    <div className="page-header-image"/>
                    <div className="content">
                        <Container>
                            <Row>
                                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                                    <div
                                        className="square square-7"
                                        id="square7"
                                        style={{transform: squares7and8}}
                                    />
                                    <div
                                        className="square square-8"
                                        id="square8"
                                        style={{transform: squares7and8}}
                                    />
                                    <Card className="card-register">
                                        <CardHeader>
                                            <CardImg
                                                alt="..."
                                                src={require("assets/img/square-purple-1.png")}
                                            />
                                            <CardTitle tag="h3">Login</CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <Form className="form">
                                                <InputGroup
                                                    className={classnames({
                                                        "input-group-focus": emailFocus
                                                    })}
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="tim-icons icon-email-85"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        onChange={(e) => setEmail(e.target.value)}

                                                        placeholder="Email"
                                                        type="email"
                                                        onFocus={(e) => setEmailFocus(true)}
                                                        onBlur={(e) => setEmailFocus(false)}
                                                    />
                                                </InputGroup>


                                                <InputGroup
                                                    className={classnames({
                                                        "input-group-focus": passwordFocus
                                                    })}
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="tim-icons icon-lock-circle"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        onChange={(e) => setPwd(e.target.value)}
                                                        placeholder="Mot de Passe"
                                                        type="text"
                                                        onFocus={(e) => setPasswordFocus(true)}
                                                        onBlur={(e) => setPasswordFocus(false)}
                                                    />
                                                </InputGroup>
                                                <FormGroup check className="text-left">
                                                    <Label check>
                                                        <Input type="checkbox"/>
                                                        <span className="form-check-sign"/>I agree to the{" "}
                                                        <a
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            terms and conditions
                                                        </a>
                                                        .
                                                    </Label>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>

                                        <span className="form-check-sign"/>Pas encore de compte?{" "}
                                        <a
                                            href="/inscription"
                                        >
                                            S'inscrire
                                        </a>


                                        <CardFooter>
                                            <Button className="btn-round" color="primary" size="lg"
                                                    onClick={() => login()}>
                                                Se Connecter
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="register-bg"/>
                            <div
                                className="square square-1"
                                id="square1"
                                style={{transform: squares1to6}}
                            />
                            <div
                                className="square square-2"
                                id="square2"
                                style={{transform: squares1to6}}
                            />
                            <div
                                className="square square-3"
                                id="square3"
                                style={{transform: squares1to6}}
                            />
                            <div
                                className="square square-4"
                                id="square4"
                                style={{transform: squares1to6}}
                            />
                            <div
                                className="square square-5"
                                id="square5"
                                style={{transform: squares1to6}}
                            />
                            <div
                                className="square square-6"
                                id="square6"
                                style={{transform: squares1to6}}
                            />
                        </Container>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
