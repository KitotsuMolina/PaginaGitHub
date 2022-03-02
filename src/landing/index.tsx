import React from 'react';
import {Col, Row} from "react-bootstrap";
import Header from "./header";
import Content from "./content";

const Landing = () => {

    const switchClass = () => {
        console.log('se cambio las clases');
    }

    return (
        <>
                <Row style={{height:'max-content', width:'100vw', marginRight: '0', marginLeft: '0'}}>
                    <Col md={12} id={'home'} style={{padding: '0px'}}>
                        <Header switchClass={switchClass}/>
                    </Col>
                    <Col md={12} style={{height: 'max-content'}}>
                        <Content/>
                    </Col>
                </Row>
        </>
    )
}

export default Landing
