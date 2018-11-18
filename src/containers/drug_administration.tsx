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
    this.state = {
      labelWidth: 0,
      curTimeOfDay: TimesOfDayEnum.BREAKFAST
    };
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const url =
      "http://campquality.org/wordpress/wp-content/themes/campquality2016/img/logo_camp-quality.png";
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

        <PatientSearch parentPage={SearchParentPageEnum.DRUG_ADMIN} />
      </div>
    );
  }
}

function mapStateToProps(state: RootState): StateProps {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({}, dispatch);
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(DrugAdministration);
