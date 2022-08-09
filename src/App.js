import React, { Component } from "react";
import Table from "./components/table/table";
import getUser from "./get-users";

class App extends Component {
  state = {
    users: getUser(),
  };
  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <div>
        <Table users={users} />
      </div>
    );
  }
}

export default App;
