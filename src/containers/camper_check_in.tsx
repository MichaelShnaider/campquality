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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { changeCamperData } from '../actions/camper_actions';

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
    },
    gender: {
        border: "1px solid #b6b6b6",
        borderRadius: "4px",
        margin: "5px 20px",
        display: "inline-block",
        width: "90%",
        padding: "0px",
        paddingLeft: "15px",
        paddingRight: "15px"
    },
    allergies: {
        border: "1px solid #b6b6b6",
        borderRadius: "4px",
        margin: "5px 20px",
        width: "90%",
        padding: "20px",
        paddingLeft: "15px",
        paddingRight: "15px"
    }

});


class CamperCheckIn extends Component<Props, State> {

    handleChange = (name, idx) => event => {
        let keys = name.split(".");
        if (keys.length > 1) {

            let camperData = this.state.camperData;

            for (var i = 0; i < keys.length - 1; i++)
                camperData = camperData[keys[i]

            camperData[keys[keys.length - 1]] = event.target.value;
        } else {
            this.state.camperData[name] = event.target.value;
        }
        this.props.changeCamperData(this.state.camperData);
        this.setState({
            camperData: this.state.camperData
        });
    };

    handleChange2 = (obj, prop, combine = false) => event => {
        if (combine) {
            obj[prop] = event.target.value.split(", ");
        } else {
            obj[prop] = event.target.value;
        }
        this.props.changeCamperData(this.state.camperData);
        this.setState({
            camperData: this.state.camperData
        });
    };

    updateCheckedIn = () => {

    }

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
                        style={{
                            marginBottom: "-15px"
                        }}
                    />

                    <div>
                        <span style={{
                            position: "relative",
                            zIndex: "1000",
                            fontSize: "12px",
                            background: "white",
                            color: "#767676",
                            top: "13px",
                            left: "30px",
                            margin: "0px",
                            padding: "0px 4px"
                        }}> Gender</span>
                        <RadioGroup
                            name="gender"
                            value={this.state.camperData.gender}
                            onChange={this.handleChange('gender')}
                            className={classes.gender}
                        >
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </div>

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
                    <Typography variant="h6" color="inherit" className={classes.subtitle} >
                        Allergies
                    </Typography>

                    <div style={{ marginTop: "-15px" }}>
                        <span style={{
                            position: "relative",
                            zIndex: "1000",
                            fontSize: "12px",
                            background: "white",
                            color: "#767676",
                            top: "13px",
                            left: "30px",
                            margin: "0px",
                            padding: "0px 4px"
                        }}> Epinephrine Injector</span>
                        <RadioGroup
                            name="epinephrine_injector"
                            value={this.state.camperData.allergies_dietary_restriction.epinephrine_injector.toString()}
                            onChange={this.handleChange('allergies_dietary_restriction.epinephrine_injector')}
                            className={classes.gender}
                        >

                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                            <FormControlLabel value="false" control={<Radio />} label="No" />
                        </RadioGroup>
                    </div>

                    <TextField
                        id="outlined-name"
                        label="Anaphylaxis"
                        multiline
                        value={this.state.camperData.allergies_dietary_restriction.anaphylaxis}
                        className={classes.textField}
                        onChange={this.handleChange('allergies_dietary_restriction.anaphylaxis')}
                        margin="normal"
                        variant="outlined"
                    />

                    {
                        this.state.camperData.allergies_dietary_restriction.allergies.map((allergy, index) => {
                            return (
                                <div key={index} className={classes.allergies} >
                                    Allergy #{index + 1}
                                    <br /><br />
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        multiline
                                        value={this.state.camperData.allergies_dietary_restriction.allergies[index].name}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.allergies_dietary_restriction.allergies[index], 'name')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Details"
                                        multiline
                                        value={this.state.camperData.allergies_dietary_restriction.allergies[index].addtional_information}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.allergies_dietary_restriction.allergies[index], 'addtional_information')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            )
                        })
                    }

                    <br />
                    <Typography variant="h6" color="inherit" className={classes.subtitle}>
                        Medical
                    </Typography>

                    {
                        this.state.camperData.medication_treatements.medications.map((allergy, index) => {
                            return (
                                <div key={index} className={classes.allergies} >
                                    Medication #{index + 1}
                                    <br /><br />
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        multiline
                                        value={this.state.camperData.medication_treatements.medications[index].name}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.medication_treatements.medications[index], 'name')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Details"
                                        multiline
                                        value={this.state.camperData.medication_treatements.medications[index].dose}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.medication_treatements.medications[index], 'details')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Dose"
                                        multiline
                                        value={this.state.camperData.medication_treatements.medications[index].details}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.medication_treatements.medications[index], 'dose')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Schedule"
                                        multiline
                                        value={this.state.camperData.medication_treatements.medications[index].schedule.join(", ")}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.medication_treatements.medications[index], 'schedule', true)}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            )
                        })
                    }

                    {
                        this.state.camperData.medication_treatements.medications_non_camp.map((allergy, index) => {
                            return (
                                <div key={index} className={classes.allergies} >
                                    Non-Camp Medication #{index + 1}
                                    <br /><br />
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        multiline
                                        value={this.state.camperData.medication_treatements.medications_non_camp[index].name}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.medication_treatements.medications_non_camp[index], 'name')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-name"
                                        label="Details"
                                        multiline
                                        value={this.state.camperData.medication_treatements.medications_non_camp[index].details}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.medication_treatements.medications_non_camp[index], 'details')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            )
                        })
                    }
                    <br />
                    <Typography variant="h6" color="inherit" className={classes.subtitle}>
                        Immunizations
                    </Typography>

                    {
                        this.state.camperData.Immunizations.vaccination.map((allergy, index) => {
                            return (
                                <div key={index} className={classes.allergies} >
                                    Vaccination #{index + 1}
                                    <br /><br />
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        multiline
                                        value={this.state.camperData.Immunizations.vaccination[index].name}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.Immunizations.vaccination[index], 'name')}
                                        margin="normal"
                                        variant="outlined"
                                    />



                                    <div style={{ marginTop: "-15px" }}>
                                        <span style={{
                                            position: "relative",
                                            zIndex: "1000",
                                            fontSize: "12px",
                                            background: "white",
                                            color: "#767676",
                                            top: "13px",
                                            left: "30px",
                                            margin: "0px",
                                            padding: "0px 4px"
                                        }}> Vaccinated</span>
                                        <RadioGroup
                                            name="vaccinated"
                                            value={this.state.camperData.Immunizations.vaccination[index].vaccinated.toString()}
                                            onChange={this.handleChange2(this.state.camperData.Immunizations.vaccination[index], 'vaccinated')}
                                            className={classes.gender}
                                        >
                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>

                                    <TextField
                                        id="outlined-name"
                                        label="Date"
                                        multiline
                                        value={this.state.camperData.Immunizations.vaccination[index].date}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.Immunizations.vaccination[index], 'date')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            )
                        })
                    }
                    <TextField
                        id="outlined-name"
                        label="Missing Immunizations Details"
                        multiline
                        value={this.state.camperData.Immunizations.missing_immunization_details}
                        className={classes.textField}
                        onChange={this.handleChange2(this.state.camperData.Immunizations, 'missing_immunization_details')}
                        margin="normal"
                        variant="outlined"
                    />

                    <br /><br />
                    <Typography variant="h6" color="inherit" className={classes.subtitle}>
                        Health History
                    </Typography>

                    {
                        this.state.camperData.health_history.conditions.map((allergy, index) => {
                            return (
                                <div key={index} className={classes.allergies} >
                                    Condition #{index + 1}
                                    <br /><br />
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        multiline
                                        value={this.state.camperData.health_history.conditions[index].name}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.health_history.conditions[index], 'name')}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <div style={{ marginTop: "-15px" }}>
                                        <span style={{
                                            position: "relative",
                                            zIndex: "1000",
                                            fontSize: "12px",
                                            background: "white",
                                            color: "#767676",
                                            top: "13px",
                                            left: "30px",
                                            margin: "0px",
                                            padding: "0px 4px"
                                        }}> Diagnosed</span>
                                        <RadioGroup
                                            name="diagnosed"
                                            value={this.state.camperData.health_history.conditions[index].experience_experienced.toString()}
                                            onChange={this.handleChange2(this.state.camperData.health_history.conditions[index], 'experience_experienced')}
                                            className={classes.gender}
                                        >
                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>

                                    <TextField
                                        id="outlined-name"
                                        label="Details"
                                        multiline
                                        value={this.state.camperData.health_history.conditions[index].details}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.health_history.conditions[index], 'details')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className={classes.allergies} >
                        Mental Health
                        <br /><br />

                        <div style={{ marginTop: "-15px" }}>
                            <span style={{
                                position: "relative",
                                zIndex: "1000",
                                fontSize: "12px",
                                background: "white",
                                color: "#767676",
                                top: "13px",
                                left: "30px",
                                margin: "0px",
                                padding: "0px 4px"
                            }}> Diagnosed</span>
                            <RadioGroup
                                name="Mental Health"
                                value={this.state.camperData.health_history.other_mental_health_issues.experience_experienced.toString()}
                                onChange={this.handleChange('health_history.other_mental_health_issues.experience_experienced')}
                                className={classes.gender}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                <FormControlLabel value="false" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>

                        <TextField
                            id="outlined-name"
                            label="Details"
                            multiline
                            value={this.state.camperData.health_history.other_mental_health_issues.details}
                            className={classes.textField}
                            onChange={this.handleChange('health_history.other_mental_health_issues.details')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>


                    {
                        this.state.camperData.health_history.disease_history.map((allergy, index) => {
                            return (
                                <div key={index} className={classes.allergies} >
                                    Disease #{index + 1}
                                    <br /><br />
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        multiline
                                        value={this.state.camperData.health_history.disease_history[index].name}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.health_history.disease_history[index], 'name')}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <div style={{ marginTop: "-15px" }}>
                                        <span style={{
                                            position: "relative",
                                            zIndex: "1000",
                                            fontSize: "12px",
                                            background: "white",
                                            color: "#767676",
                                            top: "13px",
                                            left: "30px",
                                            margin: "0px",
                                            padding: "0px 4px"
                                        }}> Diagnosed</span>
                                        <RadioGroup
                                            name="diagnosed"
                                            value={this.state.camperData.health_history.disease_history[index].experience_experienced.toString()}
                                            onChange={this.handleChange2(this.state.camperData.health_history.disease_history[index], 'experience_experienced')}
                                            className={classes.gender}
                                        >
                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </div>

                                    <TextField
                                        id="outlined-name"
                                        label="Details"
                                        multiline
                                        value={this.state.camperData.health_history.disease_history[index].details}
                                        className={classes.textField}
                                        onChange={this.handleChange2(this.state.camperData.health_history.disease_history[index], 'details')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            )
                        })
                    }
                    <TextField
                        id="outlined-name"
                        label="Hospitalizations"
                        multiline
                        value={this.state.camperData.health_history.hospitalizations}
                        className={classes.textField}
                        onChange={this.handleChange('health_history.hospitalizations')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Communicable Disease (3 months)"
                        multiline
                        value={this.state.camperData.health_history.communicable_disease_3_months}
                        className={classes.textField}
                        onChange={this.handleChange('health_history.communicable_disease_3_months')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Activity Restrictions"
                        multiline
                        value={this.state.camperData.health_history.activity_restrictions}
                        className={classes.textField}
                        onChange={this.handleChange('health_history.activity_restrictions')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Special Assistance Details"
                        multiline
                        value={this.state.camperData.health_history.special_assistance_required}
                        className={classes.textField}
                        onChange={this.handleChange('health_history.special_assistance_required')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Discuss with Medical"
                        multiline
                        value={this.state.camperData.health_history.discuss_with_medical}
                        className={classes.textField}
                        onChange={this.handleChange('health_history.discuss_with_medical')}
                        margin="normal"
                        variant="outlined"
                    />

                    <br /><br />
                    <Typography variant="h6" color="inherit" className={classes.subtitle}>
                        Doctor Information
                    </Typography>
                    <TextField
                        id="outlined-name"
                        label="Doctor Name"
                        multiline
                        value={this.state.camperData.doctor_information.doctor}
                        className={classes.textField}
                        onChange={this.handleChange('doctor_information.doctor')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Discuss with Medical"
                        multiline
                        value={this.state.camperData.doctor_information.type}
                        className={classes.textField}
                        onChange={this.handleChange('doctor_information.type')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Discuss with Medical"
                        multiline
                        value={this.state.camperData.doctor_information.hospital}
                        className={classes.textField}
                        onChange={this.handleChange('doctor_information.hospital')}
                        margin="normal"
                        variant="outlined"
                    />

                    <br /><br />
                    <Typography variant="h6" color="inherit" className={classes.subtitle}>
                        Health Insurance
                    </Typography>
                    <TextField
                        id="outlined-name"
                        label="Province"
                        multiline
                        value={this.state.camperData.health_insurance.province}
                        className={classes.textField}
                        onChange={this.handleChange('health_insurance.province')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Health Card"
                        multiline
                        value={this.state.camperData.health_insurance.health_card}
                        className={classes.textField}
                        onChange={this.handleChange('health_insurance.health_card')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Expiry Date"
                        multiline
                        value={this.state.camperData.health_insurance.expiry}
                        className={classes.textField}
                        onChange={this.handleChange('health_insurance.expiry')}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <div style={{
                    textAlign: "center",
                    marginBottom: "30px"
                }}>
                    {!this.state.camperData.checked_in &&
                        <Button variant="contained" onClick={this.updateCheckedIn()} size="large" style={{ color: "white", backgroundColor: "#339933", margin: "20px" }}>
                            Check In
    </Button>
                    }
                    {!!this.state.camperData.checked_in &&
                        <Button variant="contained" size="large" style={{ color: "white", backgroundColor: "#aaaaaa", margin: "20px" }}>
                            Checked In
    </Button>
                    }

                </div>

            </div >
                    }

}

function mapStateToProps(state: RootState): StateProps {
    return { camperData: state.campers };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return bindActionCreators({ changeCamperData }, dispatch);
}

CamperCheckIn.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(CamperCheckIn);