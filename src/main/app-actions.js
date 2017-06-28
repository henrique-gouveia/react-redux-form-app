export function nomeChange(e) {
    return {
        type: 'NOME_CHANGED',
        payload: e.target.value
    }
}

export function sobrenomeChange(e) {
    return {
        type: 'SOBRENOME_CHANGED',
        payload: e.target.value
    }
}

export function gravar(app) {
    return {
        type: 'APP_SAVED',
        payload: app
    }
}