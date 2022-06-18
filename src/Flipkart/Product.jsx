import React, { Component } from "react";
class Product extends Component {
  state = {
    product_Name: "IPhone 13 Pro",
    price: "109000",
    image:
      "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/e/l/i/iphone-13-pro-mlw03hn-a-apple-original-imag6vpb2kj4dcp5.jpeg?q=70",
    qty: 1,
  };
  incHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  decHandler = () => {
    this.setState({ qty: this.state - 1 });
  };
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7">
              <table className="table table-hover">
                <thead className="bg-info">
                  <th>Product Name</th>
                  <th>Image </th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.product_Name}</td>
                    <td>
                      <img src={this.state.image} height="20px" />
                    </td>
                    <td>{this.state.price}</td>
                    <td>
                      {this.state.qty ? (
                        <>
                          <i
                            class="fa fa-minus-circle"
                            onClick={this.incHandler}
                          ></i>
                        </>
                      ) : null}
                      {/* <i
                        class="fa fa-minus-circle"
                        onClick={this.decHandler}
                      ></i> */}
                      {this.state.qty}
                      <i
                        class="fa fa-plus-circle"
                        onClick={this.incHandler}
                      ></i>
                    </td>

                    <td>{this.state.qty * this.state.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
