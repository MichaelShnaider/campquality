import React, {Component} from "react";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import compose from "recompose/compose";
import {RootState} from "../reducers";
import ButtonAppBar from "../components/top_bar";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Col, List, Row} from "antd";

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

class DrugAdministrationSummary extends Component<Props, State> {

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

  renderCamperListItem = (medication) => {
    console.log("rendering cmaper://??", medication);
    return (
      <Row style={{width: "100%"}}>

        <Col span={12}>
          <Row style={{width: "100%", height: "100%", marginTop: "23px"}}>
            <h3>
              {medication.name}
            </h3>
            <h3>
              {medication.dose}
            </h3>
            <h3>
              {medication.details}
            </h3>

          </Row>
        </Col>

      </Row>
    );
  };

  render() {
    const {classes} = this.props;
    let camperData = this.state.camperData;

    return (
      <div>
        <ButtonAppBar />
        <Typography variant="h4" color="inherit" className={classes.title}>
          {camperData.first_name} {camperData.last_name}
        </Typography>

        <Typography variant="h6" color="inherit" className={classes.subtitle}>
          November 15, 2018
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.subtitle}>
          Breakfast Who fdsfdsfsdfds the drug
        </Typography>
        <List
          size="large"
          bordered
          dataSource={camperData.medication_treatements.medications}
          renderItem={(medication) => (
            <List.Item>{this.renderCamperListItem(medication)}</List.Item>

          )}
        />
      </div>    );
  }

}

function mapStateToProps(state: RootState): StateProps {
  return {camperData: state.campers};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({}, dispatch);
}

DrugAdministrationSummary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(DrugAdministrationSummary);
