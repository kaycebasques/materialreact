import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {
  render(){
    return(
      <div className={this.props.classes.root}>
        <AppBar position="static" color="default" className={this.props.classes.root}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              materialreact
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default hot(module)(withStyles(styles)(App));
