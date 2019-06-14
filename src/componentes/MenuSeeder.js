import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Pubsub from "pubsub-js";

export default class MenuSeeder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeder: 0
    };
  }

  randomSeed = () => {
    let randomSeed = Math.floor(Math.random() * 100 + 1);
    Pubsub.publish("retorno-seeder", {
      seeder: randomSeed
    });
    this.setState({ seeder: randomSeed });
  };

  handleChange = seeder => event => {
    this.setState({ [seeder]: parseInt(event.target.value, 10) });
  };

  handleClick = seeder => event => {
    console.log(
      "Este é o valor salvo no momento (seeder): " + this.state.seeder
    );

    Pubsub.publish("retorno-seeder", {
      seeder: this.state.seeder
    });
  };

  componentDidMount() {
    this.randomSeed();
  }

  handleFocus = event => event.target.select();

  render() {
    return (
      <div style={seederStyle}>
        <TextField
          id="standard-name"
          label="Seed"
          className={"seeder-text-field"}
          style={seederInputStyle}
          value={this.state.seeder}
          defaultValue={this.state.seeder}
          onChange={this.handleChange("seeder")}
          margin="normal"
          onFocus={this.handleFocus}
          onBlur={this.handleClick("seeder")}
        />
      </div>
    );
  }
}

const seederStyle = {
  padding: "8px 15px 8px 15px"
};

const seederInputStyle = {
  margin: "0"
};
