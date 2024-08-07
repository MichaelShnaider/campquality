import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import { Z_BLOCK } from "zlib";
import { Link } from "react-router-dom";
import { Home } from 'lucide-react';


const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ textAlign: "left" }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/dashboard" className="customLink">
            <Home size={24} />
          </Link>

          <Typography
            variant="body1"
            color="inherit"
            className={classes.grow}
            align="right"
          >
            Jane Doe
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
