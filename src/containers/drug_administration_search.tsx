import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import ButtonAppBar from "../components/top_bar";
import Grid from "@material-ui/core/Grid";
import PatientSearch from "../components/patient_search";
import { SearchParentPageEnum, TimesOfDayEnum } from "../constants";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ReactDOM from "react-dom";
import { changeTimeOfDay } from "../actions/camper_actions";

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {
  curTimeOfDay: TimesOfDayEnum;
};

class DrugAdministration extends Component<Props, State> {
  public static defaultProps = {};

  constructor(props: Props) {
    super(props);
    console.log("constructory props:", props);
    this.state = {
      labelWidth: 0,
      curTimeOfDay: props.timeOfDay
    };
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = name => event => {
    this.props.changeTimeOfDay(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  render() {
    const url =
      "https://static.wixstatic.com/media/c0f27c_81f3d5efbd2043df9d38a086173d352c~mv2.png/v1/fill/w_324,h_187,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CQ%20Canada_Logo_Green.png";
    return (
      <div style={{ textAlign: "center" }}>
        <ButtonAppBar />
        <Grid container justify="center" style={{ paddingTop: "40px" }}>
          <img src={url} style={{ height: "150px", marginBottom: "15px" }} />
        </Grid>
        <h2 style={{ color: "#E5A752" }}>Drug Administration</h2>

        <FormControl variant="outlined">
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="time_of_day"
          >
            Time Of Day
          </InputLabel>
          <Select
            style={{ width: "96vw" }}
            native
            value={this.state.curTimeOfDay}
            onChange={this.handleChange("curTimeOfDay")}
            input={
              <OutlinedInput
                name="Time Of Day"
                labelWidth={this.state.labelWidth}
                id="time_of_day"
              />
            }
          >
            <option value={TimesOfDayEnum.BREAKFAST}>Breakfast</option>
            <option value={TimesOfDayEnum.LUNCH}>Lunch</option>
            <option value={TimesOfDayEnum.DINNER}>Dinner</option>
            <option value={TimesOfDayEnum.BEDTIME}>Bedtime</option>
          </Select>
        </FormControl>

        <PatientSearch
          parentPage={SearchParentPageEnum.DRUG_ADMIN}
          curTimeOfDay={this.state.curTimeOfDay}
        />
      </div>
    );
  }
}

function mapStateToProps(state: RootState): StateProps {
  return state.timeOfDay;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({ changeTimeOfDay }, dispatch);
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(DrugAdministration);
