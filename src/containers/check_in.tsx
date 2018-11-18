import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import PatientSearch from "../components/patient_search";
import { RootState } from "../reducers";
import ButtonAppBar from "../components/top_bar";
import { transform } from "typescript";
import { SearchParentPageEnum } from "../constants";

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {};

class CheckIn extends Component<Props, State> {
  public static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <ButtonAppBar />
        <img
          src="http://campquality.org/wordpress/wp-content/themes/campquality2016/img/logo_camp-quality.png"
          style={{ height: "150px", marginTop: "20px", marginBottom: "20px" }}
        />
        <PatientSearch parentPage={SearchParentPageEnum.CHECK_IN} />
      </div>
    );
  }
}

function mapStateToProps(state: RootState): StateProps {
  return { campData: state.campers };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({}, dispatch);
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CheckIn);
