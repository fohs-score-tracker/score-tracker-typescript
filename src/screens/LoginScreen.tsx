import { Component, ReactNode } from "react";

interface IProps {}

interface IState {
  token?: string;
  apiBase?: string;
}

export default class LoginScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    return (
      <h1 onClick={() => alert("test")} className="text-primary">
        Login
      </h1>
    );
  }
}
