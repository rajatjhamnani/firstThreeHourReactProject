import React from "react";

const ShowingDetails = (props) => {
  const handleDelete = (table, index) => {
    props.onDeleteDetail(table, index);
    const existingDetails =
      JSON.parse(localStorage.getItem("orderDetails")) || [];
    existingDetails.splice(index, 1);
    localStorage.setItem("orderDetails", JSON.stringify(existingDetails));
  };
  const detailsByTable = {};
  props.details.forEach((detail) => {
    const table = detail.selectedTable;
    console.log(table);
    if (!detailsByTable[table]) {
      detailsByTable[table] = [];
    }
    detailsByTable[table].push(detail);
    console.log(detailsByTable);
  });

  // Define all three tables
  const allTables = ["Table 1", "Table 2", "Table 3"];

  return (
    <div className="App">
      <h2>Entered Details:</h2>
      {allTables.map((table, index) => (
        <div key={index}>
          <h3>{table}</h3>
          <ul>
            {detailsByTable[table] ? (
              detailsByTable[table].map((detail, idx) => (
                <li key={idx}>
                  Dish: {detail.selectedDish}, Price: {detail.selectedPrice}
                  <button onClick={() => handleDelete(table, idx)}>
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <li>No details entered yet</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShowingDetails;
