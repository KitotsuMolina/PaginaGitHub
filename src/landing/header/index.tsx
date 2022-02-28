import React from 'react';
import NavPage from "components/nav";
import imgBackground from "resources/header-img.jpg";
import {Col, Row} from "react-bootstrap";

const Header = (props:any) => {
    return (
        <>
            <NavPage switchClass={props.switchClass}/>
            <div className={'header-col-relative'}>
                <img className={"img-background"} src={imgBackground} alt="background"/>
                <Row >
                    <Col md={7}>
                        <h2>Esteban Molina</h2>
                        <h4>developer and analyst</h4>
                    </Col>
                    <Col md={5}>
                            <div className={"img-perfil"}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Header
