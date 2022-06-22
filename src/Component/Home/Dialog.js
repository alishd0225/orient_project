import React, { Component } from "react";
import "./Dialog.css";

class Dialog extends Component {
  render() {
    let dialog = (
      <div className="dialogStyles">
        <button className="dialogCloseButton" onClick={this.props.onClose}>
          x
        </button>

        <div>{this.props.children}</div>
      </div>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}

export default Dialog;
