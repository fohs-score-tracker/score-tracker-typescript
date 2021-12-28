import { Component, FC, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.sass";

interface IProps {}

interface IState {
  token?: string;
  apiBase?: string;
  name?: string;
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  apiCall = async (path: string, headers: any = {}, method = "GET") => {
    if (this.state.token !== undefined)
      headers["Authorization"] = `Bearer ${this.state.token}`;

    return await fetch(this.state.apiBase + path, { method, headers });
  };

  getName = () => {
    this.setState((oldState) => ({ name: "jeff", ...oldState }));
  };

  render = (): ReactNode => {
    return (
      <div>
        <code>{this.state.name}</code>
        <button onClick={this.getName}>oijwefojiewiwefiojwfedjef</button>
      </div>
    );
  };
}
