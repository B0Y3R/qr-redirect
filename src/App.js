import './App.css';

import routes from './routes';

import { BrowserRouter, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            routes.map((route) => (
              <route.component {...props} />
            ))
          }
        </Switch>      
      </BrowserRouter> 
    </div>
  );
}

export default App;
