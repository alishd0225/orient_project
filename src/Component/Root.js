import { Component } from "react";
import fire from "./fire";
import Home from "./Home/Home";
import SignIn from "./layout/User/SignIn";
import fire from "./fire";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListner();
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="root">{this.state.user ? <Home /> : <SignIn />}</div>
    );
  }
}

export default Root;