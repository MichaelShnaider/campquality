import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center"
  },
  icon: {
    margin: theme.spacing.unit * 2,
    marginBottom: 0
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  }
});

class DashBoardButtons extends React.Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} alignContent="center">
          <Grid item xs={12}>
            <Link to="/check-in">
              <Icon
                className={classNames(classes.icon, "fas fa-users")}
                style={{ fontSize: "75px", width: "94px", color: "#DE8265" }}
              />
              <br />
              <span style={{ color: "#DE8265" }}>Camper Check-in</span>
            </Link>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Link to="/drug-administration">
              <Icon
                className={classNames(
                  classes.icon,
                  "fas fa-prescription-bottle-alt"
                )}
                style={{ fontSize: "75px", color: "#E5A752" }}
              />
              <br />
              <span style={{ color: "#E5A752" }}>Drug Administration</span>
            </Link>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Link to="/summary">
              <Icon
                className={classNames(classes.icon, "fas fa-clipboard-list")}
                style={{ fontSize: "75px", color: "#449990" }}
              />
              <br />
              <span style={{ color: "#449990" }}>Patient Summary</span>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

DashBoardButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashBoardButtons);
