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
          src="https://static.wixstatic.com/media/c0f27c_81f3d5efbd2043df9d38a086173d352c~mv2.png/v1/fill/w_324,h_187,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CQ%20Canada_Logo_Green.png"
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
