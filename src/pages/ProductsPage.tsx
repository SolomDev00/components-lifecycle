import { Component, ReactNode } from "react";

interface IProps {}
interface IState {
  products: [];
}

export default class ProductsPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount(): void {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data.products });
      });
  }

  componentWillUnmount(): void {
    console.log(
      "%cWill Unmounting - componentWillUnmount() - Destroyed",
      "backgroundColor: red"
    );
  }

  render(): ReactNode {
    return (
      <>
        <div>Products Page</div>
        {this.state.products.map(
          (product: { id: number; title: string }, key) => (
            <h3 key={key}>{product.title}</h3>
          )
        )}
      </>
    );
  }
}
