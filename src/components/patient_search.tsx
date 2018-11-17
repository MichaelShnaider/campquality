import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import TextField from "@material-ui/core/TextField";
import { List, Col, Row } from "antd";

type OwnProps = {};
type StateProps = {};
type DispatchProps = {};
type Props = StateProps & DispatchProps & OwnProps;
type State = {
  search: string;
  campers: { name: string }[];
  searchResult: { name: string }[];
};

class PatientSearch extends Component<Props, State> {
  public static defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      search: "",
      searchResult: data,
      campers: data
    };
  }

  updateSearch = e => {
    const searchResult: CamperType[] = [];
    const search = e.target.value;
    for (const camper of this.state.campers) {
      if (camper.name.match(search)) {
        searchResult.push(camper);
      }
    }
    console.log(searchResult);
    this.setState({ searchResult });
  };

  renderCamperListItem = (camper: CamperType) => {
    console.log("rendering cmaper://??", camper);
    return (
      <Row style={{ width: "100%" }}>
        <Col span={8}>
          <img
            src="https://i.pinimg.com/236x/87/82/fc/8782fc8220561fe4a7dddb07aa15525a--face-reference-female-faces.jpg"
            style={{ height: "100px", borderRadius: "50%" }}
          />
        </Col>
        <Col span={12}>
          <Row style={{ width: "100%" }}>
            <h3>{camper.name}</h3>
          </Row>
          <Row>Lorem ipsum ....</Row>
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
            padding: "0 10px 15px 10px"
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
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({}, dispatch);
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(PatientSearch);
