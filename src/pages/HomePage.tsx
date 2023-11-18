import { Component, ReactNode } from "react";

interface IProps {}
interface IState {
  counter: number;
  products: [];
}

export default class HomePage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      counter: 0,
      products: [],
    };
  }
  render(): ReactNode {
    return <div>{this.state.counter}</div>;
  }
}
