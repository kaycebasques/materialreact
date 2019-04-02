import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Header from './Header.jsx';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {
  render(){
    return(
      <Header />
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default hot(module)(withStyles(styles)(App));
