import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import TextField from "@material-ui/core/TextField";
import { List, Col, Row } from "antd";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { classNames } from "classNames";
import { Icon } from "antd";
import { produce } from "immer";
import { Link } from "react-router-dom";
import { SearchParentPageEnum, TimesOfDayEnum } from "../constants";

type OwnProps = {
  parentPage: SearchParentPageEnum;
  curTimeOfDay: TimesOfDayEnum;
};
type StateProps = {
  camperData: CamperType[];
};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {
  search: string;
  searchResult: CamperType[];
};

class PatientSearch extends Component<Props, State> {
  public static defaultProps = {};

  constructor(props: Props) {
    super(props);
    const camperData = produce(props.camperData, draft => {
      draft.sort((a: CamperType, b: CamperType) => {
        return this.sortData(draft);
      });
      return;
    });
    this.state = {
      search: "",
      searchResult: camperData
    };
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    if (prevProps.curTimeOfDay !== this.props.curTimeOfDay) {
      const arr = [...prevState.searchResult];
      this.sortData(arr);
      this.setState({ searchResult: arr });
      return null;
    }
    return null;
  }

  sortData = (arr: any[]) => {
    arr.sort((a, b) => {
      if (this.props.parentPage === SearchParentPageEnum.CHECK_IN) {
        return a.checked_in ? 1 : -1;
      } else if (this.props.parentPage === SearchParentPageEnum.DRUG_ADMIN) {
        return this.sortByTimeOfDay(a, b);
      }
    });
  };

  sortByTimeOfDay = (a, b) => {
    if (this.props.curTimeOfDay === TimesOfDayEnum.BREAKFAST) {
      return a.medication_given.breakfast ? 1 : -1;
    }
    if (this.props.curTimeOfDay === TimesOfDayEnum.LUNCH) {
      return a.medication_given.lunch ? 1 : -1;
    }

    if (this.props.curTimeOfDay === TimesOfDayEnum.DINNER) {
      return a.medication_given.dinner ? 1 : -1;
    }

    if (this.props.curTimeOfDay === TimesOfDayEnum.BEDTIME) {
      return a.medication_given.bedtime ? 1 : -1;
    }
  };

  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }

  updateSearch = e => {
    let searchResult: CamperType[] = [];
    const search = e.target.value.toLowerCase();
    for (const camper of this.props.camperData) {
      const fullName = `${camper.first_name} ${camper.last_name}`;
      if (fullName.toLowerCase().indexOf(search) !== -1) {
        searchResult.push(camper);
      }
    }
    this.sortData(searchResult);
    this.setState({ searchResult });
  };

  renderListItemIcon = (camper: CamperType) => {
    if (this.props.parentPage === SearchParentPageEnum.CHECK_IN) {
      return (
        <Col span={4}>
          {camper.checked_in && (
            <Icon
              type="check-circle"
              theme="twoTone"
              style={{
                fontSize: "30px",
                padding: "15px"
              }}
              twoToneColor="#41e04b"
            />
          )}
          {!camper.checked_in && (
            <Icon
              type="right"
              // theme="twoTone"
              style={{ fontSize: "30px", padding: "15px" }}
              // twoToneColor="#41e04b"
            />
          )}
        </Col>
      );
    } else {
      // if (this.props.parentPage === SearchParentPageEnum.DRUG_ADMIN) {
      const drugs = camper.medication_treatements.medications;
      console.log(drugs);

      let isFinishedWithCamper = true;
      for (const drug of drugs) {
        for (const timesOfDrug of drug.schedule) {
          if (timesOfDrug.time === this.props.curTimeOfDay) {
            if (!timesOfDrug.is_taken) {
              isFinishedWithCamper = false;
            }
          }
        }
      }

      if (this.props.curTimeOfDay === TimesOfDayEnum.BREAKFAST) {
        if (isFinishedWithCamper) {
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
        } else {
          return (
            <Icon type="right" style={{ fontSize: "30px", padding: "15px" }} />
          );
        }
      }

      if (this.props.curTimeOfDay === TimesOfDayEnum.LUNCH) {
        if (isFinishedWithCamper) {
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
        } else {
          return (
            <Icon type="right" style={{ fontSize: "30px", padding: "15px" }} />
          );
        }
      }

      if (this.props.curTimeOfDay === TimesOfDayEnum.DINNER) {
        if (isFinishedWithCamper) {
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
        } else {
          return (
            <Icon type="right" style={{ fontSize: "30px", padding: "15px" }} />
          );
        }
      }

      if (this.props.curTimeOfDay === TimesOfDayEnum.BEDTIME) {
        if (isFinishedWithCamper) {
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
        } else {
          return (
            <Icon type="right" style={{ fontSize: "30px", padding: "15px" }} />
          );
        }
      }
    }
    /*
    <Col span={4}>
          {camper.checked_in && (
            <Icon
              type="check-circle"
              theme="twoTone"
              style={{
                fontSize: "30px",
                padding: "15px"
              }}
              twoToneColor="#41e04b"
            />
          )}
          {!camper.checked_in && (
            <Icon
              type="right"
              // theme="twoTone"
              style={{ fontSize: "30px", padding: "15px" }}
              // twoToneColor="#41e04b"
            />
          )}
        </Col>
    */
  };

  renderCamperListItem = (camper: CamperType) => {
    return (
      <Row style={{ width: "100%" }}>
        <Col span={8}>
          <img
            src={camper.img}
            style={{ height: "75px", width: "75px", borderRadius: "50%" }}
          />
        </Col>
        <Col span={12}>
          <Row style={{ width: "100%", height: "100%", marginTop: "23px" }}>
            <h3>
              {camper.first_name} {camper.last_name}
            </h3>
          </Row>
        </Col>
        <Col span={4}>{this.renderListItemIcon(camper)}</Col>
      </Row>
    );
  };

  renderList = () => {
    if (this.state.searchResult.length === 0) {
      return <h1>No campers found</h1>;
    }
    let url = "";
    if (this.props.parentPage === SearchParentPageEnum.CHECK_IN) {
      url = "/check-in";
    } else {
      // if (this.props.parentPage === SearchParentPageEnum.DRUG_ADMIN) {
      url = "/drug-administration";
    }

    return (
      <List
        size="large"
        bordered
        dataSource={this.state.searchResult}
        renderItem={(camper: CamperType) => (
          <Link to={`${url}/${camper.id}`}>
            <List.Item>{this.renderCamperListItem(camper)}</List.Item>
          </Link>
        )}
      />
    );
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          padding: "5px",
          textAlign: "left"
        }}
      >
        <div
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "2%",
            padding: "10px 10px 15px 10px"
          }}
        >
          <TextField
            label="Camper Search"
            placeholder="Camper Name"
            style={{ width: "100%", marginBottom: "30px" }}
            onChange={this.updateSearch}
          />
          {this.renderList()}
        </div>
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
)(PatientSearch);
