import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import ButtonAppBar from "../components/top_bar";
import Grid from '@material-ui/core/Grid';

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {};

class Summary extends Component<Props, State> {
    public static defaultProps = {};

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <Grid container justify="center" style={{ paddingTop: "40px" }}>
                    <img
                        src="https://static.wixstatic.com/media/c0f27c_81f3d5efbd2043df9d38a086173d352c~mv2.png/v1/fill/w_324,h_187,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CQ%20Canada_Logo_Green.png"
                        style={{ height: "150px", marginBottom: "80px" }}
                    />
                </Grid>
            </div>
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
)(Summary);
