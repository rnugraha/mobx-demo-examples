import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";

var timerData = observable({
  secondsPassed: 0
});

setInterval(() => {
  timerData.secondsPassed++;
}, 1000);

@observer
class Timer extends React.Component {
  render() {
    return <span>Seconds passed: {this.props.timerData.secondsPassed} </span>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer timerData={timerData} />, rootElement);
