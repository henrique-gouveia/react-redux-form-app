import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { gravar } from './app-actions'

class App extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <form>
                <label htmlFor='nome'>Nome</label>
                <Field name='nome' component='input' />
                <br />
                <label htmlFor='sobrenome'>Sobrenome</label>
                <Field name='sobrenome' component='input' />
                <br />
                <button type='submit' onClick={handleSubmit(data => this.props.gravar(data))} >
                    Salvar
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ gravar }, dispatch)

App = reduxForm({ form: 'appForm' })(App)
export default connect(null, mapDispatchToProps)(App)
