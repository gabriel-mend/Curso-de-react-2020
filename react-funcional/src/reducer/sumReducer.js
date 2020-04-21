import { useReducer } from 'react'

const inicialState = {
    result: ''
}

const sumReducer = (state = inicialState, action) => {
    console.log('action executada', JSON.stringify(action))
    switch(action.type) {
        case 'SUM':
        case 'SUB':
            return {...state, result: action.payload}
        default:
            return state
    }
}

const useStore = () => useReducer(sumReducer, inicialState)

export default useStore