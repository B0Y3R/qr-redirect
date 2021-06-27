import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';

import NavBar from '../components/NavBar';
import AgeRestrictionCheck from '../components/AgeRestrictionCheck';
import ProductContent from '../components/ProductContent';
import InvalidTag from '../components/InvalidTag';

import json from '../json';

const useStyles = makeStyles({
    container: {
        height: '100%',
        overflow: 'hidden',
    },
    content: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: 'calc(100% - 56px)',
    }
});

export default function Product(props) {
    let { id } = useParams();
    const classes = useStyles();

    const [ product, setProduct ] = useState(null);
    const [ brand, setBrand ] = useState(null);
    const [ ageVerified, setAgeVerified ] = useState(false);

    useEffect(() => {
      
        if (json[id]?.tag) {
            const { brand, product } = json[id].tag;

            setProduct(product);
            setBrand(brand);
        }

    }, [id])

    function renderContent() {
        if (product.ageRestricted && !ageVerified) {
            return <AgeRestrictionCheck setAgeVerified={setAgeVerified} />
        } 
        return  <ProductContent product={product} id={id} />
    }

    if (!product) {
        return <InvalidTag />
    }

    return (
        <div className={classes.container}>
            <NavBar brandName={brand.name} />
            <div className={classes.content}>
                { renderContent() }
            </div>
        </div>
    )
}