import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Ekart() {
  const [items, setItems] = useState([
    {
      itemId: 1234,
      itemName: "Jam",
      description: "Pineapple",
      quantity: 0,
      cpu: 2,
    },
    {
      itemId: 4567,
      itemName: "Cheeze",
      description: "Chedder",
      quantity: 0,
      cpu: 3.5,
    },
    {
      itemId: 8910,
      itemName: "Mayonnese",
      description: "Eggless",
      quantity: 0,
      cpu: 2.75,
    },
  ]);

  const [totalCost, setTotalCost] = useState("");

  const handleQuantity = (index, value) => {
    let itemsList = [...items];
    itemsList[index].quantity = value;
    setItems(itemsList);
  };

  const calculateTotalCost = () => {
    let cost = 0;
    items.map((itm) => {
      return (cost += itm.quantity * itm.cpu);
    });
    setTotalCost(cost);
  };
  return (
    <div>
      <div className="row m-5">
        <div className="container col-5 bg-info rounded border">
          <h3>Ecart Item List</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((itm,index)=>{
                    return(
                        <tr key={itm.itemId}>
                            <td>{itm.itemId}</td>
                            <td>{itm.itemName}</td>
                            <td>{itm.description}</td>
                            <td>
                               <input 
                               type="number"
                               min="0"
                               value={itm.quantity}
                               onChange={(event)=>handleQuantity(index,event.target.value)}
                               />
                            </td>
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="container col-5 bg-light rounded border">
          <h3>Billing Details</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Cost per Unit ($)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.itemId}>
                    <td>{item.itemId}</td>
                    <td>{item.itemName}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>{item.cpu}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={calculateTotalCost}>
            Total Cost (in $) is {totalCost}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ekart;
