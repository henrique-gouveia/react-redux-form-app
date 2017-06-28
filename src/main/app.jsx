import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { nomeChange, sobrenomeChange, gravar } from './app-actions'

class App extends Component {
    render() {
        return (
            <form>
                <label htmlFor='nome'>Nome</label>
                <input type='text' name='nome' 
                    value={this.props.app.nome} 
                    onChange={this.props.nomeChange} />
                
                <br />
                
                <label htmlFor='sobrenome'>Sobrenome</label>
                <input type='text' name='sobrenome' 
                    value={this.props.app.sobrenome} 
                    onChange={this.props.sobrenomeChange} />

                <br />

                <button type='button' onClick={() => this.props.gravar(this.props.app)} >
                    Salvar
                </button>        
            </form>
        )
    }
}

const mapStateToProps = state => ({ app: state.app })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ nomeChange, sobrenomeChange, gravar }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
