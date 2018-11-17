import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import TextField from "@material-ui/core/TextField";
import { List, Col, Row } from "antd";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { classNames } from "classNames";
import { Icon } from "antd";

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {
  search: string;
  searchResult: { name: string }[];
};

class PatientSearch extends Component<Props, State> {
  public static defaultProps = {};

  constructor(props: Props) {
    super(props);
    console.log("ear;y", props);
    this.state = {
      search: "",
      searchResult: props.camperData
    };
  }

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
    // console.log(searchResult);
    // searchResult.sort((a, b) => {
    //   return false;
    // });
    this.setState({ searchResult });
  };

  renderCamperListItem = (camper: CamperType) => {
    console.log("rendering cmaper://??", camper);
    return (
      <Row style={{ width: "100%" }}>
        <Col span={8}>
          <img
            src={camper.img}
            style={{ height: "75px", width: "75px", borderRadius: "50%" }}
          />
        </Col>
        <Col span={12}>
          <Row style={{ width: "100%" }}>
            <h3>
              {camper.first_name} {camper.last_name}
            </h3>
          </Row>
          <Row>Lorem ipsum ....</Row>
        </Col>
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
      </Row>
    );
  };

  renderList = () => {
    if (this.state.searchResult.length === 0) {
      return <h1>No campers found</h1>;
    }

    return (
      <List
        size="large"
        bordered
        dataSource={this.state.searchResult}
        renderItem={(item: CamperType) => (
          <List.Item>{this.renderCamperListItem(item)}</List.Item>
        )}
      />
    );
  };

  render() {
    return (
      <div style={{ width: "100%", padding: "5px" }}>
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

const data = [
  {
    name: "Stacy"
  },
  {
    name: "James"
  },
  {
    name: "Marcy"
  },
  {
    name: "Sabrina"
  },
  {
    name: "Michael"
  }
];
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
