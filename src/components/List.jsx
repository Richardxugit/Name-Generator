import React from "react";
import getNameList from "../api";
import styles from "./List.module.scss";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { namelist: "" };
  }

  async GetName() {
    const list = await getNameList();
    this.setState({ namelist: list });
    console.log(list);
  }

  Refresh() {
    this.setState({
      namelist: "",
    });
    console.log(this.state.namelist);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Name Generator</h2>
        <button
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            this.GetName();
          }}
        >
          Generate
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            this.Refresh();
          }}
        >
          Fresh
        </button>
        <br /> <br />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>FirstName</th>
              <th>LastName</th>
            </tr>
          </thead>
          <tbody>
            {this.state.namelist.length > 0
              ? this.state.namelist.map((name, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name.firstname}</td>
                    <td>{name.lastname}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default List;
