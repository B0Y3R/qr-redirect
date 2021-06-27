import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    container: {
        height: 150, 
        width: 150,  
        margin: '10px auto', 
        borderRadius: 100,
        border: '1px solid black'
    },
    img: {
        maxHeight: '100%', 
        maxWidth: '100%', 
        objectFit: 'cover', 
        borderRadius: 100,
    }
});

export default function ProductImage({ img }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={img} className={classes.img} alt="product" />
        </div>
    )
} 