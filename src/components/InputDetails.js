import React, { useState } from "react";
const InputDetails = (props) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");
  const idChnange = (event) => {
    setOrderId(event.target.value);
    console.log(event.target.value);
  };
  const priceChange = (event) => {
    setPrice(event.target.value);
    console.log(event.target.value);
  };
  const dishChange = (event) => {
    setDish(event.target.value);
    console.log(event.target.value);
  };
  const tableChange = (event) => {
    setTable(event.target.value);
    console.log(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const EnteredDetails = {
      SelectedId: orderId,
      SelectedPrice: price,
      SelectedDish: dish,
      SelectedTable: table,
    };
    console.log(EnteredDetails);
    const existingDetails =
      JSON.parse(localStorage.getItem("orderDetails")) || [];

    existingDetails.push(EnteredDetails);
    localStorage.setItem("orderDetails", JSON.stringify(existingDetails));

    props.onAddDetails(orderId, price, dish, table);
    setOrderId("");
    setPrice("");
    setDish("select");
    setTable("select Table");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <label htmlFor="order">Order Id</label>
        <input
          type="number"
          name="order"
          min="1"
          step="1"
          value={orderId}
          onChange={idChnange}
        />
        <label htmlFor="price">Choose Price</label>
        <input
          type="number"
          name="price"
          min="50"
          step="50"
          value={price}
          onChange={priceChange}
        />
        <label>choose Dish</label>
        <select onChange={dishChange} value={dish}>
          <option>Select</option>
          <option>Dosa</option>
          <option>Noodles</option>
          <option>Ice Cream</option>
          <option>Idli</option>
        </select>
        <label>choose Table</label>
        <select onChange={tableChange} value={table}>
          <option>select Table</option>
          <option>Table 1</option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>
        <button type="submit">Add To Bill</button>
      </div>
    </form>
  );
};
export default InputDetails;
