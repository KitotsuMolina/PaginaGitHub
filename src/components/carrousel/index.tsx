import React from 'react';
import {Carousel, Button, Card, Row, Col} from "react-bootstrap";
import Card_Carrousel from "./card/card-carrousel";
import LogoReact from '../../resources/Logo_React.png';
import LogoFireBase from '../../resources/Logo_Firebase.png';
const Carrousel = (props:any) => {
    const projects = [
        {
            info:'Proyecto basado en React, Gestion con firebase ' +
                'y mapas leaflet, single page dinamica que permite ' +
                'agregar zonas de influencias mas  creacion de servicios o planes',
            titulo:'Proyecto #1',
            link:'https://hmtelcauca.vercel.app/',
            logoOne: {src:LogoReact, active: true},
            logoTwo: {src:LogoFireBase, active: true},
        },
        {
            info:'Pagina Desarrollada Puramente Con React',
            titulo:'Pagina Principal',
            link:'',
            logoOne: {src:LogoReact, active: true},
            logoTwo: {src:null, active: false},
        }
    ]


    return (
        <>
            <Carousel>
                {projects.map((project,key) => (
                    <Carousel.Item key={key}>
                        <Card_Carrousel data={project}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Carrousel;
