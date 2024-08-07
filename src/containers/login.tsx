import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      // width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    margin: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function Login(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <img
          src="https://static.wixstatic.com/media/c0f27c_81f3d5efbd2043df9d38a086173d352c~mv2.png/v1/fill/w_324,h_187,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CQ%20Canada_Logo_Green.png"
          style={{ height: "150px", marginBottom: "30px" }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus defaultValue="janedoe@gmail.com" />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue="password"
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => (window.location.href = "/dashboard")}
        >
          Demo Login
        </Button>
      </Paper>
    </main>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
