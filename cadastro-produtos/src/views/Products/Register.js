import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import ProductController from '../../controller/ProductController'
import Card from '../../components/Card'

const inicialState = {
    name: '',
    sku: '',
    description: '',
    price: 0,
    provider: '',
    success: false,
    errors: [],
    updating: false,
}

class Register extends Component {

    constructor() {
        super()
        this.service = new ProductController()
    }
    
    state = inicialState 

    onChange = (event) => {
        const value = event.target.value
        const nameField = event.target.name
        this.setState({
            [nameField]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const product = {
            name: this.state.name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            provider: this.state.provider,
        }
        try {
            this.clearFields()
            this.service.save(product)
            this.setState({success: true})
        } catch(error) {
           const errors =  error.errors
           console.log(errors)
           this.setState({ errors: errors})
        }
    }

    clearFields = () => {
        this.setState( inicialState )
    }
    componentDidMount() {
        // recolhendo um parametro que veio do List com o withRouter
        const sku = this.props.match.params.sku

        if(sku) {
            const result = this.service.list().filter( product => product.sku === sku)

            if(result.length === 1) {
                const product = result[0]

                this.setState({...product, updating: true})
            }
        }
    }
    
  render() {
    return (
        <Card header={this.state.updating ? 'Atualização de produto' : 'Cadastro de produto'}>
            <form action="" onSubmit={this.onSubmit}>
                { this.state.success &&
                    <div className="alert alert-dismissible alert-success">
                        <button type="button" className="close" onClick={() => this.setState({success: false})} data-dismiss="alert">&times;</button>
                        <strong>Parabéns!</strong> Cadastro realizado com sucesso.
                    </div>
                }
                { this.state.errors.length > 0 &&
                    this.state.errors.map((msg) => {
                        return (
                            <div className="alert alert-dismissible alert-danger">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Erro! </strong>{msg}
                            </div>
                        )
                    }) 
                }
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nome do Produto: <span style={{color: "#2A9FD6"}}>*</span></label>
                            <input 
                                type="text"
                                name="name"
                                value={this.state.name} 
                                className="form-control"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>SKU: <span style={{color: "#2A9FD6"}}>*</span></label>
                            <input 
                                type="text" 
                                name="sku"
                                disabled={this.state.updating} 
                                value={this.state.sku} 
                                className="form-control"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Descrição:</label>
                            <textarea
                                className="form-control" 
                                name="description" 
                                value={this.state.description}
                                onChange={this.onChange}
                            />
                         </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Preço: <span style={{color: "#2A9FD6"}}>*</span></label>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{background: "#2A9FD6"}}>R$</span>
                                </div>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    aria-label="Amount (to the nearest dollar)"
                                    name="price" 
                                    value={this.state.price}
                                    onChange={this.onChange} 
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text" style={{background: "#2A9FD6"}}>.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Fornecedor: <span style={{color: "#2A9FD6"}}>*</span></label>
                            <input 
                                type="text"
                                name="provider"
                                className="form-control"
                                value={this.state.provider}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <button type="submit" className="btn btn-outline-success btn-block">
                            {this.state.updating ? 'Atualizar ' : 'Cadastrar '}
                            produto
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button type="button" onClick={this.clearFields} className="btn btn-outline-primary btn-block">
                            Limpar Campos
                        </button>
                    </div>
                </div>
            </form>
            </Card>
    )
  }
}

export default withRouter(Register)