import React, { Component } from "react";
import axios from "axios";
import AdviseeTableBody from "./components/adviseeTableBody";
import AdviseeTableHead from "./components/adviseeTableHead";
//import { getAdvisees } from "./service/tempAdvisees";
import { getListOfAdvisees, getAdvisee, getUser } from "./service/userService";

class AdviseeTable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);

    this.handleSearch = this.handleSearch.bind(this);
  }
  state = {
    advisees: [],
  };

  async componentDidMount() {
    const { user } = this.props;
    var userId = user._doc._id;
    console.log(userId);
    const { data: advisees } = await getListOfAdvisees(userId);
    //console.log("Data = " + resp);
    //const { data } = resp;

    this.setState({ advisees });
    console.log("State of data = " + this.state.advisees);

    /* const { specificAdvisee } = await getAdvisee(userId, data[0]);
    this.setState({ advisee1: specificAdvisee }); */
    //console.log(this.state.advisee1);
    //this.testAxios();
  }
  /* async testAxios() {
    let res = await axios.get(
      "http://localhost:9000/users/" + this.state.advisees[0]
    );
    let data = res.data;
    console.log(data);
    const { adviseeData } = data;
    this.setState({ advisee: adviseeData });
    console.log("State of advisee = " + this.state.advisee);
  } */
  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  };
  handleLike = (advisee) => {
    const advisees = [...this.state.advisees];
    const index = advisees.indexOf(advisee);
    advisees[index].liked = !advisees[index].liked;
    this.setState({ advisees });
  };
  handleClick() {
    const toggle = !this.state.toggle;
    this.setState({ toggle }); //this.state.toggle =toggle is incorrect
  }
  filterAdviseesByName = () => {
    let advisees = [...this.state.advisees];
    if (this.state.query) {
      const filtered = advisees.filter((c) =>
        c.lName.toLowerCase().startsWith(this.state.query.toLowerCase())
      );
      advisees = filtered;
    }
    return advisees;
  };
  render() {
    const advisees = this.filterAdviseesByName();
    //const { adviseeData } = this.state.advisee;

    return (
      <React.Fragment>
        {/* <input
          type="text"
          className="form-control"
          name="search"
          placeholder="Search by Name"
          value={this.state.query}
          onChange={this.handleSearch}
        /> */}
        <div class="container">
          <div class="row" align="center">
            <div class="col">
              <table className="table">
                <AdviseeTableHead />
                <AdviseeTableBody advisees={advisees} />
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdviseeTable;
