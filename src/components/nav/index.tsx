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
        console.log(booleanState)
        if(booleanState){
            window.onwheel = null;
        }else{

        }
    }

    const links:Array<LinksList> = [
        {id: 1, name: 'Home', href: '#'},
        {id: 2, name: 'Perfil Profesional', href: 'perfil_profesional'},
        {id: 3, name: 'Proyectos', href: 'proyectos'},
        {id: 4, name: 'Estudios', href: 'estudios'},
    ]
    const onCLickRedirect = (link: string) =>{
        console.log(link)
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

    const header = document.getElementById("menu-bar");


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
                <div className={classesMenuHidden}>
                    <nav className={classesMenuContainer}>
                        <Row >
                            {links.map((value:LinksList)=>(
                                <Col md={12} key={value.id}  onClick={()=>onCLickRedirect(value.href)}>{value.name}</Col>
                            ))}
                        </Row>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default NavPage
