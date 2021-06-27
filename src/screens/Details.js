import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import makeStyles from '@material-ui/core/styles/makeStyles';

import NavBar from '../components/NavBar';
import ProductImage from '../components/ProductImage';

import json from '../json';

const useStyles = makeStyles({
    container: {
        height: '100%',
    },
    content: {
        height: 'calc(100% - 56px)',  
    },
    productDetailsContent: {
        padding: 15,
        display: 'flex',
    },
    boldText: {
        fontWeight: 700,
        marginRight: 5,
    },
    productValue: {
        paddingTop: 3,
    }
});


export default function Details(props) {
    const classes = useStyles();
    let { id } = useParams();

    const [ product, setProduct ] = useState(null);

    useEffect(() => {
        const { product } = json[id].tag;

        setProduct(product);
    },[id])

    if (!product) {
        return <div>Loading</div>
    }

    function renderProductDetails() {
        if (product.details) {
            return Object.keys(product.details).map((p, index) => (
                <div key={index} className={classes.productDetailsContent}>
                    <Typography variant="h6" className={classes.boldText}> {p}: </Typography>
                    <Typography variant="subtitle1" className={classes.productValue}> {product.details[p].toString()} </Typography>
                </div>
            ));
        } 
        return <Typography variant="subtitle1" className={classes.boldText}>No Product Details Available at this time</Typography>
    }

    return (
        <div className={classes.container}>
            <NavBar brandName={`${product.name} Details`} details />
            <div className={classes.content}>
                <ProductImage img={product.image} />
                { renderProductDetails() }
            </div>
        </div>
    )
}