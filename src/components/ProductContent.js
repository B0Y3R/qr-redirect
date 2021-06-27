import { useHistory } from 'react-router-dom'

import ChevronRight from '@material-ui/icons/ChevronRight';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';

import ProductImage from '../components/ProductImage';

const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
    },
    detailsColumn: {
        padding: '20px 10px', 
        display: 'flex', 
        justifyContent: 'space-between',
        marginTop: 20,
    },
    boldFont: {
        fontWeight: 700, 
    },
});

export default function ProductContent({ product, id }) {
    const classes = useStyles();
    let history = useHistory();

    return ( 
        <div className={classes.container}>
            <ProductImage img={product.image} />
            <Typography variant="h5" className={classes.boldFont} >{product.name} </Typography>
            <Typography variant="h6" className={classes.boldFont} >SKU # {product.sku} </Typography>
            <div className={classes.detailsColumn} onClick={() => history.push(`/details/${id}`)}>
                <Typography variant="h5"> Product Details</Typography>
                <ChevronRight fontSize="large" />
            </div>
        </div>
    )
}