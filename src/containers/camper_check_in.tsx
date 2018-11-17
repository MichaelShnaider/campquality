import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import compose from 'recompose/compose';
import { RootState } from "../reducers";
import ButtonAppBar from "../components/top_bar";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {};

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: "20px",
        marginRight: "20px",
        width: "90%",
        marginTop: "5px",
        marginBottom: "5px"
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    title: {
        margin: "20px"
    },
    subtitle: {
        margin: 0,
        marginLeft: "20px",
        marginRight: "20px"
    }
});

class CamperCheckIn extends Component<Props, State> {

    handleChange = name => event => {
        this.state.camperData[name] = event.target.value;
        this.setState({
            camperData: this.state.camperData
        });
    };

    public static defaultProps = {};

    constructor(props: Props) {
        super(props);
        let camperData = this.props.camperData[this.props.match.params.camper_id]
        this.state = {
            camperData: camperData
        };
    }

    render() {
        const { classes } = this.props;
        let camperData = this.state.camperData;
        return (
            <div>
                <ButtonAppBar />
                <Typography variant="h4" color="inherit" className={classes.title}>
                    {camperData.first_name} {camperData.last_name}
                </Typography>
                <form noValidate autoComplete="off">
                    <Typography variant="h6" color="inherit" className={classes.subtitle}>
                        Personal Information
                    </Typography>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={this.state.camperData.first_name}
                        className={classes.textField}
                        onChange={this.handleChange('first_name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Last Name"
                        value={this.state.camperData.last_name}
                        className={classes.textField}
                        onChange={this.handleChange('last_name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Gender"
                        value={this.state.camperData.gender}
                        className={classes.textField}
                        onChange={this.handleChange('gender')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Height (cm)"
                        value={this.state.camperData.height_cm}
                        className={classes.textField}
                        onChange={this.handleChange('height_cm')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Weight (lbs)"
                        value={this.state.camperData.weight_lbs}
                        className={classes.textField}
                        onChange={this.handleChange('weight_lbs')}
                        margin="normal"
                        variant="outlined"
                    />
                    <br /><br />
                    <Typography variant="h6" color="inherit" className={classes.subtitle}>
                        Allergies
                    </Typography>
                    <TextField
                        id="outlined-name"
                        label="Epinephrine Injector"
                        value={this.state.camperData.allergies_dietary_restriction.epinephrine_injector}
                        className={classes.textField}
                        onChange={this.handleChange('epinephrine_injector')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Anaphylaxis"
                        value={this.state.camperData.allergies_dietary_restriction.anaphylaxis}
                        className={classes.textField}
                        onChange={this.handleChange('anaphylaxis')}
                        margin="normal"
                        variant="outlined"
                    />
                    {/* <TextField
                        id="outlined-uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        error
                        id="outlined-error"
                        label="Error"
                        defaultValue="Hello World"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-dense"
                        label="Dense"
                        className={}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="4"
                        value={"this.state.multiline"}
                        onChange={this.handleChange('multiline')}

                        margin="normal"
                        helperText="hello"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows="4"
                        defaultValue="Default Value"

                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"

                        helperText="Some important text"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-with-placeholder"
                        label="With placeholder"
                        placeholder="Placeholder"

                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline

                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        value={69}
                        onChange={this.handleChange('age')}
                        type="number"

                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />


                    <TextField
                        id="outlined-full-width"
                        label="Label"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="outlined-bare"

                        defaultValue="Bare"
                        margin="normal"
                        variant="outlined"
                    /> */}
                </form>


            </div>
    }

}

function mapStateToProps(state: RootState): StateProps {
    return { camperData: state.campers };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return bindActionCreators({}, dispatch);
}

CamperCheckIn.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(CamperCheckIn);