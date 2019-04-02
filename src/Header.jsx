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

class Header extends Component {
  render(){
    return(
      <AppBar position="static" color="default" className={this.props.classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            materialreact
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default hot(module)(withStyles(styles)(Header));
