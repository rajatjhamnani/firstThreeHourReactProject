import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import InputDetails from "./components/InputDetails";
import ShowingDetails from "./components/ShowingDetails";
import Card from "./components/Card";
import Heading from "./components/Heading";

function App() {
  const [enteredDetails, setEnteredDetails] = useState([]);

  const deleteDetail = (table, index) => {
    const updatedDetails = enteredDetails.filter(
      (detail) =>
        !(
          detail.selectedTable === table &&
          enteredDetails.indexOf(detail) === index
        )
    );
    setEnteredDetails(updatedDetails);
  };
  const addDetails = (uId, price, dish, table) => {
    console.log(uId, table);
    setEnteredDetails((prevDetails) => {
      return [
        ...prevDetails,
        { selectedTable: table, selectedDish: dish, selectedPrice: price },
      ];
    });
  };
  return (
    <Card>
      <Heading />
      <InputDetails onAddDetails={addDetails} />
      <ShowingDetails details={enteredDetails} onDeleteDetail={deleteDetail} />
    </Card>
  );
}

export default App;
