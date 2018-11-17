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
                        src="http://campquality.org/wordpress/wp-content/themes/campquality2016/img/logo_camp-quality.png"
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
