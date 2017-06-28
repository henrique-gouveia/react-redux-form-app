const INITIAL_STATE = { nome: '', sobrenome: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NOME_CHANGED':
            return { ...state, nome: action.payload }
        case 'SOBRENOME_CHANGED':
            return { ...state, sobrenome: action.payload }
        
        case 'APP_SAVED': {
            console.log(action.payload)
            return state
        }
        
        default:
            return state
    }
}