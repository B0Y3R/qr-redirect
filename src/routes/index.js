import React from 'react';

import Product from '../screens/Product'

const ROUTES = [
    {
        path: "/:id",
        name: "Product",
        component: Product,
    }
]

export default ROUTES;