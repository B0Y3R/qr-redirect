import { Route, BrowserRouter, Switch  } from 'react-router-dom'

import makeStyles from '@material-ui/core/styles/makeStyles';

import Product from './screens/Product';
import Details from './screens/Details';

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
    height: '100vh',
    minHeight: '-webkit-fill-available',
  }
});

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id" children={<Product />} />
          <Route path="/details/:id" children={<Details />} />
        </Switch>      
      </BrowserRouter> 
    </div>
  );
}

export default App;
