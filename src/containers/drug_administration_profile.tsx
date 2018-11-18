import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import ButtonAppBar from "../components/top_bar";

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {};

class DrugAdminProfile extends Component<Props, State> {
  public static defaultProps = {};

  constructor(props: Props) {
    super(props);
    const curCamperId = this.props.match.params.camper_id;
    this.state = {
      camper: props.camperData[curCamperId]
    };
  }

  render() {
    console.log(this.props, this.state);
    return (
      <div style={{ textAlign: "center" }}>
        <ButtonAppBar />
        <h3 style={{ margin: "20px" }}>
          {this.state.camper.first_name} {this.state.camper.last_name}
        </h3>
        <h3>November, 17, 2018</h3>
        {this.renderListItems()}
      </div>
    );
  }
}

function mapStateToProps(state: RootState): StateProps {
  return { camperData: state.campers };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({}, dispatch);
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(DrugAdminProfile);
