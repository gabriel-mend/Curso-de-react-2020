import React from 'react';
import { withRouter } from 'react-router-dom'

import ProductController from '../../controller/ProductController'
import Card from '../../components/Card'
import ProductsTable from './ProductsTable'

class List extends React.Component {
    constructor() {
        super()
        this.service = new ProductController()
    }

    state = {
        products: []
    }

    componentDidMount() {
        const products = this.service.list()
        this.setState({ products })
    }

    prepareEdit = (sku) => {
        this.props.history.push(`/register/${sku}`)
    }

    delete = (sku) => {
        const products = this.service.delete(sku)
        this.setState({products})
    }

  render() {
    return (
        <Card header={'Lista de Produtos'}>
            <ProductsTable 
                products={this.state.products} 
                editAction={ this.prepareEdit } 
                deleteAction={ this.delete }
            />
        </Card>
    );
  }
}
export default withRouter(List)
