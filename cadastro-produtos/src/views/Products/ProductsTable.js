import React from 'react'

export default (props) => (
    <table className="table table-hover">
        <thead>
            <tr className="table-primary">
                <th>Nome:</th>
                <th>SKU:</th>
                <th>Preço:</th>
                <th>Fornecedor:</th>
                <th>Ações:</th>
            </tr>
        </thead>
        <tbody>
            { props.products.map((product, index) => {
                return (
                    <tr key={index}>
                        <th>{product.name}</th>
                        <th>{product.sku}</th>
                        <th>R$ {product.price}</th>
                        <th>{product.provider}</th>
                        <th>
                            <button className="btn btn-outline-warning" onClick={ () =>  props.editAction(product.sku) } style={{marginRight: 15}}>Editar</button>
                            <button className="btn btn-outline-danger" onClick={ () =>  props.deleteAction(product.sku) }>Remover</button>
                        </th>
                    </tr>
                )
            }) 
            }
        </tbody>
    </table>
)