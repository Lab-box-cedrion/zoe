import React, { Component } from "react";
import Noty from "noty";
import "./noty.css";
import "./bootstrap-v4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

class Warning extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Warning">
        <button
          className="startButton warningButton"
          onClick={(e) => this.showWarning(e)}
          type="submit"
        >
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    );
  }

  showWarning() {
    let secondsExperiment = this.props.tiempo;
    let timeoutWarning = secondsExperiment * 1000;
    new Noty({
      type: "warning",
      theme: "bootstrap-v4",
      layout: "center",
      text: `Ensayo de ${secondsExperiment} segundos`,
      timeout: `${timeoutWarning}`,
    }).show();
  }
}

export default Warning;
