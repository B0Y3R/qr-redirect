import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: 20,
    },
    button: {
        backgroundColor: "#000", 
        color: "#fff", 
        padding: 15, 
        marginTop: 20,
    },
    input: {
        display: 'none',
    }
});

export default function InvalidTag() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <Typography variant="h6">   Whoops! Thats not a valid Tag! Are you sure this is a valid Brij product? if so try scanning again </Typography> 
        <Button 
            variant='contained' 
            component="label" 
            type="submit" 
            className={classes.button}
            fullWidth
        > 
            Scan
            <input 
                id="camera" 
                type="file" 
                hidden 
                accept="image/*" 
                className={classes.input}
                capture='environment'
            />
      </Button>
    </div>
    )
}