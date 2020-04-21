import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Register from './views/Products/Register'
import List from './views/Products/List'

export default () => {
    return (
            <Switch>
                <Route exact={true}  path="/" component={Home} />
                <Route exact={true} path="/register/:sku?" component={Register} />
                <Route exact={true} path="/list" component={List} />
            </Switch>
    )
}
