const Products = '_PRODUCTS'

export function ErrorValidate (errors) {
    this.errors = errors
}

export default class ProductController {
    validate = (product) => {
        const errors = []
        //const sku = product.sku

        if(!product.name) {
            errors.push('O campo Nome é obrigátorio')
        }

        if(!product.sku) {
            errors.push('O campo Sku é obrigátorio')
        }
        /*
        if(sku) {
            const result = this.list().filter(product => product.sku === sku)
            if(result.length === 1) {  
                errors.push('Este SKU já existe na base de dados')
            }
        }
        */
        if(!product.price || product.price <= 0) {
            errors.push('O campo preço deve ser maior que zero(0)')
        }

        if(!product.provider) {
            errors.push('O campo Sku é obrigátorio')
        }

        if(errors.length > 0) {
            throw new ErrorValidate(errors)
        }
    }

    getIndex = (sku) => {
        let index = null

        this.list().forEach((product, i) => {
            if(product.sku === sku) {
                index = i
            }
        })
        return index
    }

    delete = (sku) => {
        const index = this.getIndex(sku)

        if(index !== null) {
            const products = this.list()
            products.splice(index, 1)
            localStorage.setItem(Products, JSON.stringify(products))
            return products
        }
    }

    save = (product) => {
        this.validate(product)

        let products = localStorage.getItem(Products)

        
        if(!products) {
            products = []
        } else {
            products = JSON.parse(products)
        }
        // edit and save
        const index = this.getIndex(product.sku)

        if(index === null) {
            products.push(product)

        } else {
            products[index] = product
        }

        localStorage.setItem(Products, JSON.stringify(products))
    }

    list = () => {
        const products = localStorage.getItem(Products)
        if(!products) {
            return []
        }
        return  JSON.parse(products)
    }


}