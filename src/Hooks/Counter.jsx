import React, { useState } from "react";

const Counter = () => {
  let [product, setProduct] = useState({
    prod_name: "Iphone 13 pro",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcnbF7bhNC6PfvCPhEYKlMe1I5GrCvDn0hvpKYTXE0HdkwChCg4IOrzHUovHQ_vlVzow59fYfR2myVKv17YBGHgL20MGxr",
    price: 109000,
    qty: 1,
  });
  let incHandler = () => {
    setProduct({ ...product, qty: product.qty + 1 });
  };
  let decHandler = () => {
    setProduct({ ...product, qty: product.qty - 1 });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <table className="table table-hover">
            <thead className="bg-dark text-white  ">
              <tr>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th> Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.prod_name}</td>
                <td>
                  <img src={product.image} height="50px" />
                </td>
                <td>{product.price}</td>
                <td>
                  <i className="fa fa-minus-circle" onClick={decHandler}></i>
                  {product.qty}
                  <i className="fa fa-plus-circle" onClick={incHandler}></i>
                </td>
                <td>{product.qty * product.price} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Counter;
