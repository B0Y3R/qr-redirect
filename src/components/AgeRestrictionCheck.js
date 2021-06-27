import { useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    container: {
        height: '40%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
    },
    button: {
        backgroundColor: "#000", 
        color: "#fff", 
        padding: 15, 
        marginTop: 20,
    },
    warningText: {
        color: 'red',
        marginTop: 10,
    }
});


export default function AgeRestrictionCheck({ setAgeVerified }) {
    const classes = useStyles();

    const [ notOldEnough, setNotOldEnough ] = useState(true);

    if (!notOldEnough) {
        return <Typography variant="h6" className={classes.warningText}>You must be 21+ to visit this site </Typography>
    }

    return (
        <div className={classes.container}>
            <Typography variant="h5"> CONFIRM YOUR AGE </Typography>
            <Typography variant="caption"> Are you 21 or older? </Typography>
            <Button fullWidth onClick={() => setAgeVerified(true)} className={classes.button}>Yes</Button>
            <Button fullWidth onClick={() => setNotOldEnough(false)} className={classes.button}>No</Button>
            <Typography variant="caption" className={classes.warningText}>You must be 21+ to visit this site </Typography>
        </div> 
    )
}