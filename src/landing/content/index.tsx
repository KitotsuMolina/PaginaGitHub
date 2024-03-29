import React from 'react';
import {Card, Col, Row, Table, Accordion} from "react-bootstrap";
import { Rating } from 'primereact/rating';
import Carrousel from "components/carrousel";
const Content = () => {

    const skillFrontend:any = [
        {id: 1, skill: 'Angular CLI 8+', exp: '8 meses', rating: 6},
        {id: 2, skill: 'Angular Js', exp: '6 meses', rating: 6},
        {id: 3, skill: 'Vue CLI', exp: '2 meses', rating: 4},
        {id: 4, skill: 'HTML5', exp: '2 años', rating: 10},
        {id: 5, skill: 'CSS', exp: '2 años', rating: 10},
        {id: 6, skill: 'Sass/SCSS', exp: '4 meses', rating: 5},
        {id: 7, skill: 'Javascript', exp: '2 años', rating: 10},
        {id: 8, skill: 'Typescript', exp: '2 años', rating: 10}
    ]
    const skillBackend: any = [
        {id: 1, skill: 'Springboot', exp: '2 año 3 meses', rating: 10},
        {id: 2, skill: 'Express Js', exp: '4 meses', rating: 4},
        {id: 3, skill: 'Django', exp: '8 meses', rating: 5},
        {id: 4, skill: 'Python', exp: '8 meses', rating: 6},
        {id: 5, skill: 'Php', exp: '6 meses', rating: 5},
        {id: 6, skill: 'Java EE / Java', exp: '1 año 5 meses', rating: 10},
        {id: 7, skill: 'Node Js', exp: '5 meses', rating: 5}
    ]
    const skillOther = [
        {id: 1, skill: 'PostgresSQL', exp: '1 año', rating: 7},
        {id: 2, skill: 'MySQL', exp: '6 meses', rating: 5},
        {id: 3, skill: 'AWS', exp: '4 meses', rating: 4},
        {id: 4, skill: 'Rest API', exp: '1 año', rating: 10},
        {id: 5, skill: 'SOAP', exp: '3 meses', rating: 4},
        {id: 6, skill: 'GraphQL', exp: '2 meses', rating: 4},
        {id: 7, skill: 'Leaflet Js', exp: '5 meses', rating: 8},
        {id: 8, skill: 'Scrum', exp: '9 meses', rating: 7},
        {id: 9, skill: 'Adobe PhotoShop', exp: 'N/N', rating: 4},
        {id: 10, skill: 'Adobe After Effect', exp: 'N/N', rating: 5},
    ]

    return (
        <>
            <Row style={{height: 'max-content'}}>
                <Col md={12} id={'perfil_profesional'} className={'perfil_profesional'} style={{height: 'max-content', padding: '1em'}}>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={5} xxl={4} >
                            <Row>
                                <Col md={12} sm={12}>
                                    <Card className={'card-datos_contacto'}>
                                        <Card.Body>
                                            <Card.Title>Datos Personales</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li><i className={'pi pi-user'}/>Jhojan Esteban Molina Valencia</li>
                                                    <li><i className={'pi pi-map-marker'}/>Cra 51 Oeste #4-37,
                                                        Cali, Valle del Cauca</li>
                                                    <li>
                                                        <a href="mailto:jhojan.e.m.v.2018@gmail.com?Subject=Interesado%20en%20Servicios" rel="noopener noreferrer" target="_blank">
                                                            <i className={'pi pi-at'}/> jhojan.e.m.v.2018@gmail.com
                                                        </a>
                                                    </li>
                                                    <li><i className={'pi pi-phone'}/>(+57) 300 7764 995</li>
                                                    <li>
                                                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jhojan-esteban-molina-valencia-692a1b211/" >
                                                            <i className={'pi pi-linkedin'}/>Jhojan Esteban Molina Valencia
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1HFkmPeInbVhx5qvjZkRteFKS1RdTQtIw/view?usp=sharing">
                                                            <i className={'pi pi-paperclip'}/>Link a diplomas, titulos y
                                                            reconocimientos
                                                        </a>

                                                    </li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={12} sm={12}>
                                    <Card className={'card-habilidades'}>
                                        <Card.Body>
                                            <Row>
                                                <Col lg={12} md={12} sm={12} style={{marginTop:'1em'}}>
                                                    <Card.Title>Perfil Profesional</Card.Title>
                                                    <Card.Text style={{width: '100%',paddingInline: '3em'}}>
                                                        Cualificado del Programa de
                                                        Formación Técnico en
                                                        programación de software,
                                                        Tecnología en análisis y desarrollo
                                                        de software, manejo de Office,
                                                        páginas web (creación de página),
                                                        soporte técnico, instalación y
                                                        mantenimiento de programas,
                                                        sistemas operativos(Windows,
                                                        Linux, Android), capacitado para trabajar en equipo
                                                        direccionado a uso de metodologías ágiles
                                                        enfocado en el uso de SCRUM, con capacidad de absorción de
                                                        conocimientos en capacidad de aprender conocimientos necesarios
                                                        para el proceso de desarrollo.
                                                    </Card.Text></Col>
                                                <Col lg={12} md={12} sm={12} style={{marginTop:'1em'}}>
                                                    <Card.Title>Habilidades</Card.Title>
                                                    <Card.Text style={{width: '100%'}}>
                                                        <ul style={{width: '100%'}}>
                                                            <li><i className={'pi pi-caret-right'}/>Gran rendimiento bajo presión</li>
                                                            <li><i className={'pi pi-caret-right'}/>Excepcionales dotes comunicativas y compañerismo</li>
                                                            <li><i className={'pi pi-caret-right'}/>Buen compañero y con capacidad de trabajo independiente</li>
                                                            <li><i className={'pi pi-caret-right'}/>Facilidad para seguir instrucciones y generar resultados de
                                                                calidad</li>
                                                            <li><i className={'pi pi-caret-right'}/>Curva de aprendizaje muy corta, rápida absorción de
                                                                conocimiento</li>
                                                        </ul>
                                                    </Card.Text>
                                                </Col>

                                            </Row>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={12} lg={12} xl={7} xxl={8}>
                            <Row>
                                <Col sm={12} md={12} lg={12} id={'skills'}>
                                    <Card className={'card-tabla'}>
                                        <Card.Body>
                                            <h1>Frontend Skills</h1>
                                            <Table responsive striped bordered hover variant="dark" >
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Skill</th>
                                                    <th>Tiempo de Experiencia</th>
                                                    <th>Conocimiento</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    skillFrontend.map((value:any)=>(
                                                        <tr key={value.id}>
                                                            <td>{value.id}</td>
                                                            <td>{value.skill}</td>
                                                            <td>{value.exp}</td>
                                                            <td> <Rating value={value.rating} readOnly stars={10} cancel={false} /></td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                    <Card  className={'card-tabla'}>
                                        <Card.Body>
                                            <h1>Backend Skills</h1>
                                            <Table responsive striped bordered hover variant="dark" >
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Skill</th>
                                                    <th>Tiempo de Experiencia</th>
                                                    <th>Conocimiento</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    skillBackend.map((value:any)=>(
                                                        <tr key={value.id}>
                                                            <td>{value.id}</td>
                                                            <td>{value.skill}</td>
                                                            <td>{value.exp}</td>
                                                            <td> <Rating value={value.rating} readOnly stars={10} cancel={false} /></td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>


                        <Col sm={12} md={12}>
                            <Card style={{ width: '100%' }} className={'card-tabla'}>
                                <Card.Body>
                                    <h1>Otros Skills</h1>
                                    <Table responsive striped bordered hover variant="dark" >
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Skill</th>
                                            <th>Tiempo de Experiencia</th>
                                            <th>Conocimiento</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            skillOther.map((value:any)=>(
                                                <tr key={value.id}>
                                                    <td>{value.id}</td>
                                                    <td>{value.skill}</td>
                                                    <td>{value.exp}</td>
                                                    <td> <Rating value={value.rating} readOnly stars={10} cancel={false} /></td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} id={'estudios'} style={{height: 'max-content', padding: '1em', textAlign: 'center'}}>
                    <Accordion defaultActiveKey="0" style={{textAlign: 'left', position: 'relative',boxShadow: '1px 3px 16px -5px rgb(0 0 0 / 76%)',backgroundColor: '#1fbec48c'}}>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header style={{zIndex: '1'}}>Técnico en Programación - Servicio
                                Nacional de Aprendizaje (SENA)</Accordion.Header>
                            <Accordion.Body style={{position: 'relative' }}>
                                <h3>Competencias</h3>

                                <ul>
                                    <li>Construir el map de navegación de acuerdo con el
                                        diseño entregado para orientar al usuario en el uso del
                                        aplicativo.</li>
                                    <li>Construir la matriz CRUD en el lenguaje de
                                        programación seleccionado para verificar la
                                        funcionalidad del sistema de acuerdo con el diseño
                                        entregado.</li>
                                    <li>Construir las tablas que hacen parte del diseño del
                                        diagrama, relacionar en el motor de base de datos
                                        empleando las 4 formas de normalización.</li>
                                    <li>Relacionar tablas construidas para presentar la
                                        información solicitada en el diseño</li>
                                    <li>Analizar los requisitos del cliente para construir el
                                        sistema de formación</li>
                                    <li>Promover la interacción idónea consigo mismo con los
                                        demás y con la naturaleza en los contextos laboral y
                                        social.</li>
                                    <li>Comprender textos en inglés de forma escrita y auditiva.</li>
                                    <li>Realizar intercambios sociales y prácticos muy breves con
                                        un vocabulario muy breve para realizar una exposición o
                                        mantener una conversación sencilla</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header style={{zIndex: '1'}}>Tecnología Análisis y Desarrollo de
                                Sistemas de la Información -
                                Servicio Nacional de Aprendizaje
                                (SENA)</Accordion.Header>
                            <Accordion.Body style={{position: 'relative'}}>
                                <h3>Competencias</h3>

                                <ul>
                                    <li>Especificar los requisitos necesarios para desarrollar el
                                        sistema de información de acuerdo con las necesidades
                                        del cliente.</li>
                                    <li>Construir el sistema que cumpla con los requisitos de la
                                        solución • Participar en el proceso de negociación de
                                        tecnología informática para permitir la implementación
                                        del sistema de información.</li>
                                    <li>Analizar los requisitos del cliente para construir el
                                        sistema de información.</li>
                                    <li>Diseñar el sistema de acuerdo con los requisitos del
                                        cliente.</li>
                                    <li>Implantar la solución que cumpla con los requisitos para
                                        su operación.</li>
                                    <li>Aplicar buenas prácticas de calidad en el proceso de
                                        desarrollo de software, de acuerdo con el referente
                                        adoptado en la empresa.</li>
                                    <li>Ejecuta el proceso integral (análisis, diseño,
                                        implementación, pruebas y ajustes) de generación de
                                        sistemas de información, para la sitematización o
                                        automatización de procesos.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col md={12} id={'accordion'} style={{height: 'max-content', padding: '1em', textAlign: 'center'}}>
                    <Card className={'card-habilidades'} style={{position:'relative'}}>
                        <Card.Body className={'card-body-habilidades'}>
                            <Carrousel/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Content
