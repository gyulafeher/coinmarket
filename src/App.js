import './App.css';
import useStyles from './styles';
import {
  Grid,
} from '@material-ui/core';
import Markets from './components/markets';
import Coins from './components/coins';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const classes = useStyles();
  return (
    <Router>

      <Grid container className={classes.rootContainer}>
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Switch>
            <Route exact path="/" component={Markets} />
            <Route exact path="/:id" component={Coins} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Router >

  );
}

export default App;
