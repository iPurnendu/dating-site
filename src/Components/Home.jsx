import { Alert, Container } from "react-bootstrap";
import { Col, NavbarToggle, Row } from "react-bootstrap";
import home_rigt_img from "../Image/home-right-side image.png";
import { useState } from "react";
import { Header } from "./Header";
import { Hidingdiv } from "./Hidingdiv";

export function Home() {

    // const[searchplace,setSearchPlace] = useState('');
    // const[searchgender,setGender] = useState('all');

    // function filterBySearch(){

    // }
    return (
        <>
        <Header></Header>
        <Hidingdiv></Hidingdiv>
        <Container className="mt-5">
            <Row>
                <Col className="col-6">
                </Col>
                <Col className="col-6">
                    <img src={home_rigt_img} />
                </Col>
            </Row>
        </Container></>
    );
}