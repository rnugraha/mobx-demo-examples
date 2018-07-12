import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { configure } from "mobx";

configure({ enforceActions: "strict" });

class Temperature {
  @observable temperatureCelsius;
  @observable unit;

  constructor(temp) {
    this.setUnit("C");
    this.setCelsius(90);
  }

  @computed
  get temperatureKelvin() {
    return this.temperatureCelsius * (9 / 5) + 32;
  }

  @computed
  get temperatureFahrenheit() {
    console.log("calculating Fahrenheit", this.temperatureCelsius);
    return this.temperatureCelsius + 273.15;
  }

  @computed
  get temperature() {
    console.log("calculating temperature", [
      this.unit,
      this.temperatureCelsius
    ]);

    switch (this.unit) {
      case "K":
        return this.temperatureKelvin + "°K";
      case "F":
        return this.temperatureFahrenheit + "°F";
      case "C": {
        return this.temperatureCelsius + "°C";
      }
      default:
        return this.temperatureCelsius + "°C";
    }
  }

  @action
  setUnit(newUnit) {
    this.unit = newUnit;
  }

  @action("setting celsius temperature")
  setCelsius(temperature) {
    this.temperatureCelsius = temperature;
  }
}

let t = new Temperature(25);
t.setUnit("K");
// t.unit = "K";

const App = observer(({ temperature }) => <div>{temperature.temperature}</div>);

const rootElement = document.getElementById("root");
ReactDOM.render(<App temperature={t} />, rootElement);
