import React, {useEffect, useState} from 'react';
import classNames from 'classnames'
import {LinksList} from "@interfaces/const";
import {Col, Row} from "react-bootstrap";

let timeout: any;
let scroll = 0;

const NavPage = (props:any) => {
    const [booleanState, setBooleanState] = useState<boolean>(false);
    const [booleanBarState, setBooleanBarState] = useState<any>('null');
    const [booleanBarItemsState, setBooleanBarItemsState] = useState<boolean>(false);
    const classesIconoMenu = classNames( {
        'pi': true,
        'pi-angle-right': true,
        'color-check-enable': booleanState === true,
        'color-check-disabled': booleanState === false,
        'color-check--scroll-up': booleanBarState === true,
        'color-check--scroll-down': booleanBarState === false
    })
    const classesMenu = classNames( {
        'menu': true,
        'menu-disabled': booleanState === false,
        'menu-enable': booleanState === true,
        'menu--scroll-up': booleanBarState === true,
        'menu--scroll-down': booleanBarState === false,
    })

    const classesMenuContainer = classNames( {
        'menu-container': true,
        'menu-container-disabled': booleanState === false,
        'menu-container-enable': booleanState === true
    })

    const classesMenuHidden = classNames( {
        'menu-hidden': true,
        'menu-hidden-disabled': booleanState === false,
        'menu-hidden-enable': booleanState === true
    })

    const classesMenuBar = classNames( {
        'menu-bar': true,
        'menu-bar--scroll-down': booleanBarState === false ,
        'menu-bar--scroll-up': booleanBarState === true,
        'menu-bar-enable': booleanState === true
    })
    const classesH1Tittle = classNames( {
        'title-menu-enable': booleanBarItemsState === true,
        'title-menu-disabled': booleanBarItemsState === false || booleanState === true
    })
    const classesImageTittle = classNames( {
        'img-perfil-enable': booleanBarItemsState === true,
        'img-perfil-disabled': booleanBarItemsState === false || booleanState === true
    })

    const onClickBottom = () =>{
        props.switchClass();
        setBooleanState(!booleanState);
    }

    const links:Array<LinksList> = [
        {id: 1, name: 'Home', href: 'home'},
        {id: 2, name: 'Perfil Profesional', href: 'perfil_profesional'},
        {id: 3, name: 'Skills', href: 'skills'},
        {id: 4, name: 'Estudios', href: 'estudios'},
    ]
    const onCLickRedirect = (link: string) =>{
        console.log(link)
        const redirect: any = document.getElementById(link)
        redirect.scrollIntoView(true);
        setBooleanState(false);

        if(link === 'home'){
            setBooleanBarItemsState(false);
        }
    }

    useEffect(()=>{
        if(booleanState && window.scrollY <= 1){
            setBooleanBarState('null');
        }
        if(booleanState === false && window.scrollY > 1){
            setTimeout(()=>{
                setBooleanBarState(false);
            },500)
        }
        window.onscroll =  (event:any) => {
            if(timeout){
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                    if(booleanState){
                        if(window.scrollY <= 1){
                            setBooleanBarState('null');
                        }
                    }else{
                        if(window.scrollY > 1){
                            if(scroll >= window.scrollY && window.scrollY > 10){
                                setBooleanBarState(true);
                                setBooleanBarItemsState(true);
                            }else{
                                setBooleanBarState(false);
                            }
                            scroll = window.scrollY;
                        }else{
                            setBooleanBarState('null');
                            setBooleanBarItemsState(false);
                        }
                    }
            }, 10)}
    },[booleanState])

    const logoBlackCat = (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="500" viewBox="0 0 500 500" >
            <desc>Created with Fabric.js 4.6.0</desc>
            <defs>
            </defs>
            <g transform="matrix(0.93 0 0 0.93 202.41 103.93)" id="1rpsawUBaKTfHpf81bJWw">
                <path style={{stroke: 'rgb(0,0,0)',strokeWidth: 23,strokeDasharray: 'none',strokeLinecap: 'butt',strokeDashoffset: 0,strokeLinejoin: 'miter',strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillOpacity: 0, fillRule: 'nonzero', opacity: 1}} vectorEffect="non-scaling-stroke" transform=" translate(0, 0)" d="M -6.27281 -36.47497 C -6.27281 -36.47497 12.896519999999999 0.26624000000000336 3.8443400000000008 36.47498" strokeLinecap="round"/>
            </g>
            <g transform="matrix(1.02 0 0 1.02 159.04 200.39)" id="UNptsW-2QCXyl_ZH8nC6D">
                <path style={{stroke: 'rgb(0,0,0)',strokeWidth: 22,strokeDasharray: 'none',strokeLinecap: 'butt',strokeDashoffset: 0,strokeLinejoin: 'miter',strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillOpacity: 0, fillRule: 'nonzero', opacity: 1}} vectorEffect="non-scaling-stroke" transform=" translate(0, 0)" d="M 52.71565 -68.95634 L -7.454740000000001 -39.13737999999999 C -7.454740000000001 -39.13737999999999 4.259849999999998 -10.915869999999995 -2.6624100000000013 17.838130000000007 C -9.584670000000001 46.59212000000001 -28.22152 55.37807000000001 -28.22152 55.37807000000001 L -52.71566 68.95634000000001" strokeLinecap="round"/>
            </g>
            <g transform="matrix(1 0 0 1 151.16 298.72)" id="nlE5_j9qpIMfUbB5EKD57">
                <path style={{stroke: 'rgb(0,0,0)',strokeWidth: 21,strokeDasharray: 'none',strokeLinecap: 'butt',strokeDashoffset: 0,strokeLinejoin: 'miter',strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillOpacity: 0, fillRule: 'nonzero', opacity: 1}} vectorEffect="non-scaling-stroke" transform=" translate(0, 0)" d="M -40.75106 -41.53355 C -18.386840000000003 29.28647 40.75106999999999 41.533539999999995 40.75106999999999 41.533539999999995" strokeLinecap="round"/>
            </g>
            <g transform="matrix(1 0 0 1 226.57 337.56)" id="NYLgXMX1g70b0On9OXY7R">
                <path style={{stroke: 'rgb(0,0,0)',strokeWidth: 21,strokeDasharray: 'none',strokeLinecap: 'butt',strokeDashoffset: 0,strokeLinejoin: 'miter',strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillOpacity: 0, fillRule: 'nonzero', opacity: 1}} vectorEffect="non-scaling-stroke" transform=" translate(0, 0)" d="M -42.04318 0.51609 C 10.672469999999997 17.02301 42.04318 -6.4061699999999995 42.04318 -6.4061699999999995" strokeLinecap="round"/>
            </g>
            <g transform="matrix(1 0 0 1 291.52 256.92)" id="gSRVe5UNq6LmphKa99GwX">
                <path style={{stroke: 'rgb(0,0,0)',strokeWidth: 23,strokeDasharray: 'none',strokeLinecap: 'butt',strokeDashoffset: 0,strokeLinejoin: 'miter',strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillOpacity: 0, fillRule: 'nonzero', opacity: 1}} vectorEffect="non-scaling-stroke" transform=" translate(0, 0)" d="M -103.81615 -191.95953 C 9.069900000000004 -179.71246 72.43518 -93.45048 72.43518 -92.918 C 72.43518 -92.38552 116.63113000000001 -35.41001000000001 100.12421 51.38444999999999 C 83.61729 138.17890999999997 37.823890000000006 156.81575999999998 37.823890000000006 156.81575999999998 C 37.823890000000006 156.81575999999998 0.5501900000000077 188.23216 -94.23149000000001 191.95952999999997" strokeLinecap="round"/>
            </g>
        </svg>
    )

    return (
        <>
            <div id={"menu-bar"} className={classesMenuBar}>
                <Row style={{height: '100%'}}>
                    <Col md={1}>
                        <div onClick={onClickBottom} className={classesMenu} >
                            <i className={classesIconoMenu} style={{'fontSize': '2em'}}/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <h1 className={classesH1Tittle}>Esteban Molina</h1>
                    </Col>
                    <Col md={3}>
                            <div className={classesImageTittle}/>
                    </Col>
                </Row>
                <div className={classesMenuHidden} onClick={() =>{setBooleanState(false)}}>
                    <nav className={classesMenuContainer}>
                        <Row >
                            {links.map((value:LinksList)=>(
                                <Col md={12} key={value.id}  onClick={()=>onCLickRedirect(value.href)}>{value.name}</Col>
                            ))}
                        </Row>
                    </nav>
                    <div className={'logo'}>
                        <div className={'hijo'}>
                            {logoBlackCat}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavPage
