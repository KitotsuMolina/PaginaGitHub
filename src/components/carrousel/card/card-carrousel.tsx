import React from 'react';
import LogoVectors from '../../../resources/Vector_2.png';


const Card_Carrousel = (props:any) => {

    const styleOne = () =>{
        let json = {}
        if(props.data.logoOne.active && props.data.logoTwo.active) {
            json = {display: 'block'}
        }else if(props.data.logoOne.active && !props.data.logoTwo.active){
            json ={
                display: 'block',
                width: '15em ',
                top: '4em ',
                left: '14em '
            }
        }else{ json = {display: 'none'}}
        console.log(json)
        return json;
    }

    const styleTwo = () =>{
        if(props.data.logoTwo.active) {
            return {display: 'block'};
        }else{
            return {display: 'none'};
        }
    }



    return (
        <>
            <div className={'div-projects'}>
                <div className={'texto-project'}>
    `               <h2>
                        {props.data.titulo}
                    </h2>
                    <p>
                        {props.data.info}
                    </p>
                    <a href={props.data.link}>Link</a>
                </div>
                <div className={'vector-one'}>
                    <img className={'img'} src={LogoVectors}/>
                </div>
                <div className={'vector-two'}>
                    <img className={'img'} src={LogoVectors}/>
                </div>
                <div className={'logo-one'} style={styleOne()}>
                    <img className={'img-react'} src={props.data.logoOne.src}/>
                </div>
                <div className={'logo-two'} style={styleTwo()}>
                    <img className={'img-firebase'} src={props.data.logoTwo.src}/>
                </div>
            </div>
        </>
    )
}

export default Card_Carrousel;
