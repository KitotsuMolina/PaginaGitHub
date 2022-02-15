// Constantes
import {StoreInterface} from "../../interfaces/storeInterface";

const storeInicial: StoreInterface = {
    array: []
};

// Types

const GET_DATA_SUCCESS: string = 'GET_POKE_SUCCESS';

// Reducer

export default function storeReducer(state: StoreInterface = storeInicial, action: any){
    switch (action.type){
        case GET_DATA_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// Actions

export const obtenerDataAction = () => async (dispatch: any, getState: any) => {
    try {
        dispatch({
            type: GET_DATA_SUCCESS,
            payload: ['uno','dos','tres','cuatro']
        })
    } catch (e: any) {
        console.error(e)
    }
}



