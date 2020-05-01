
const ESTADO_INICIAL = {
    mensagem: "",
    mostrarMensagem: false
}

export const ACTIONS = {
    MOSTRAR: 'MENSAGENS_MOSTRAR',
    ESCONDER: 'MENSAGENS_ESCONDER'
}

export function mensagemReducer (state = ESTADO_INICIAL, action) {
    switch(action.type){
        case ACTIONS.MOSTRAR:
            return {...state, mensagem: action.mensagem, mostrarMensagem: true}
        case ACTIONS.ESCONDER:
            return {...state, mensagem: '', mostrarMensagem: false}
        default: 
            return state
    }

}

export function esconder() {
    return {
        type: ACTIONS.ESCONDER
    }
}

export function mostrar(mensagem) {
    return {
        type: ACTIONS.MOSTRAR,
        mensagem: mensagem
    }
}