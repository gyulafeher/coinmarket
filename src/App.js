import './App.css';
import useStyles from './styles';
import {
  Grid,
} from '@material-ui/core';
import Markets from './components/markets';

function App() {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.rootContainer}>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Markets />
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
}

export default App;
