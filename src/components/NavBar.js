import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

import ChevronLeft from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxHeight: 56,
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
});

export default function ButtonAppBar({ details, brandName }) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#fff">
        <Toolbar>
          { 
            details &&
              <ChevronLeft onClick={() => history.goBack()} />
          }
          <Typography variant="h6" className={classes.title}>
            { brandName }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}