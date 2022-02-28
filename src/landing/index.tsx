import React from 'react';
import {Col, Row} from "react-bootstrap";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const Landing = () => {

    const switchClass = () => {
        console.log('se cambio las clases');
    }

    return (
        <>
                <Row style={{height:'max-content', width:'100vw'}}>
                    <Col md={12} >
                        <Header switchClass={switchClass}/>
                    </Col>
                    <Col md={12} style={{height: '100vh'}}>
                        <Content/>
                    </Col>
                    <Col md={12}>
                        <Footer/>
                    </Col>
                </Row>
        </>
    )
}

export default Landing
