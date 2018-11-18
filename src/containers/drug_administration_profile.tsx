import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import ButtonAppBar from "../components/top_bar";
import { TimesOfDayEnum } from "../constants";
import { MedicineType } from "../data-types";
import { List, Row, Col, Icon } from "antd";
import { Modal } from "antd";
import { changeCamperData } from "../actions/camper_actions";

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {
  showConfirmationModal: boolean;
  selectedMed: any;
};

class DrugAdminProfile extends Component<Props, State> {
  public static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      camper: {},
      breakfastArr: [],
      lunchArr: [],
      dinnerArr: [],
      bedtimeArr: [],
      showConfirmationModal: false,
      selectedMed: {}
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("new props: ", nextProps[this.props.match.params.camper_id]);
  //   if (this.props !== nextProps) {
  //     this.setState({ camper: nextProps[this.props.match.params.camper_id] });
  //   }
  // }

  componentDidMount() {
    this.populateArrays();
  }

  populateArrays = () => {
    const breakfastArr: any = [];
    const lunchArr: any = [];
    const dinnerArr: any = [];
    const bedtimeArr: any = [];
    for (const med of this.props.camperData[this.props.match.params.camper_id]
      .medication_treatements.medications) {
      for (const schedule of med.schedule) {
        switch (schedule.time) {
          case TimesOfDayEnum.BREAKFAST: {
            breakfastArr.push({
              timeOfDay: TimesOfDayEnum.BREAKFAST,
              is_taken: schedule.is_taken,
              ...med,
              time: `9:${Math.floor(Math.random() * 20) + 10} A.M.`
            });
            break;
          }
          case TimesOfDayEnum.LUNCH: {
            lunchArr.push({
              timeOfDay: TimesOfDayEnum.LUNCH,
              is_taken: schedule.is_taken,
              ...med,
              time: `9:${Math.floor(Math.random() * 20) + 10} A.M.`
            });
            break;
          }
          case TimesOfDayEnum.DINNER: {
            dinnerArr.push({
              timeOfDay: TimesOfDayEnum.DINNER,
              is_taken: schedule.is_taken,
              ...med,
              time: `9:${Math.floor(Math.random() * 20) + 10} A.M.`
            });
            break;
          }
          case TimesOfDayEnum.BEDTIME: {
            bedtimeArr.push({
              timeOfDay: TimesOfDayEnum.BEDTIME,
              is_taken: schedule.is_taken,
              ...med,
              time: `9:${Math.floor(Math.random() * 20) + 10} A.M.`
            });
            break;
          }
          default: {
            break;
          }
        }
      }
    }

    this.setState({
      breakfastArr,
      lunchArr,
      dinnerArr,
      bedtimeArr
    });
  };

  renderListIcon = med => {
    // for (const schedule of med.schedule)
    if (med.is_taken) {
      return (
        <Icon
          type="check-circle"
          theme="twoTone"
          style={{
            fontSize: "30px",
            padding: "15px"
          }}
          twoToneColor="#41e04b"
        />
      );
    }
    return (
      <Icon
        type="exclamation-circle"
        theme="twoTone"
        twoToneColor="#ef2e10"
        style={{
          fontSize: "30px",
          padding: "15px"
        }}
      />
    );
  };

  renderListItem = (med: MedicineType) => {
    return (
      <Row
        style={{ width: "100%" }}
        onClick={() =>
          this.setState({
            showConfirmationModal: true,
            selectedMed: med
          })
        }
      >
        <Col span={16}>
          <Row>
            <strong>Name:</strong> {med.name}
          </Row>
          <Row>
            <strong>Dose:</strong> {med.dose}
          </Row>
          <Row>
            <strong>Details:</strong> {med.details}
          </Row>
        </Col>
        <Col span={8} style={{ textAlign: "right" }}>
          <Row>{this.renderListIcon(med)}</Row>
          {med.is_taken && <Row>{med.time}</Row>}
        </Col>
      </Row>
    );
  };

  renderListObject = dataset => {
    return (
      <List
        style={{ margin: "15px 0px" }}
        locale={{ emptyText: "No medication" }}
        size="large"
        bordered
        dataSource={dataset}
        renderItem={(dataset: MedicineType) => (
          <List.Item>{this.renderListItem(dataset)}</List.Item>
        )}
      />
    );
  };

  renderListContainer = () => {
    return [
      <h3 key={0}>Breakfast</h3>,
      this.renderListObject(this.state.breakfastArr),
      <h3 key={1}>Lunch</h3>,
      this.renderListObject(this.state.lunchArr),
      <h3 key={2}>Dinner</h3>,
      this.renderListObject(this.state.dinnerArr),
      <h3 key={3}>Bedtime</h3>,
      this.renderListObject(this.state.bedtimeArr)
    ];
  };

  handleOk = () => {
    const newCamper = this.props.camperData[this.props.match.params.camper_id];
    for (const med of newCamper.medication_treatements.medications) {
      if (this.state.selectedMed.name === med.name) {
        for (const sched of med.schedule) {
          if (sched.time === this.state.selectedMed.timeOfDay) {
            sched.is_taken = true;
          }
        }
      }
    }
    // console.log("GREEN: ", camper.medication_treatements.medications);
    this.props.changeCamperData(newCamper);
    this.setState({ showConfirmationModal: false });
    this.populateArrays();
  };

  render() {
    // console.log(this.props, this.state);
    return (
      <div style={{ textAlign: "center" }}>
        <ButtonAppBar />
        <h3 style={{ margin: "20px" }}>
          {this.state.camper.first_name} {this.state.camper.last_name}
        </h3>
        <h3>November 17, 2018</h3>
        <div style={{ textAlign: "left", padding: "25px" }}>
          {this.renderListContainer()}
        </div>
        <Modal
          title={`${this.state.camper.first_name} ${
            this.state.camper.last_name
          }`}
          visible={this.state.showConfirmationModal}
          onOk={this.handleOk}
          onCancel={() =>
            this.setState({ selectedMed: {}, showConfirmationModal: false })
          }
        >
          <Row>
            <strong>Name:</strong> {this.state.selectedMed.name}
          </Row>
          <Row>
            <strong>Dose:</strong> {this.state.selectedMed.dose}
          </Row>
          <Row>
            <strong>Details:</strong> {this.state.selectedMed.details}
          </Row>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state: RootState): StateProps {
  return { camperData: state.campers };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({ changeCamperData }, dispatch);
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(DrugAdminProfile);
