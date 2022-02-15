import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {obtenerDataAction} from "../redux/ducks/storeDucks";

const Prueba = () => {
    const dispatch = useDispatch()

    const array = useSelector((store:any) => store.store.array);

    return (
        <div>
            <h1>Prueba Array</h1>
            <button onClick={() => dispatch(obtenerDataAction())}>obtener</button>
            <ul>
                {
                    array.map((item:any) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Prueba
