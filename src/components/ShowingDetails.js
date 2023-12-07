import React from "react";

const ShowingDetails = (props) => {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Table 1</th>
          </tr>
        </thead>
        <tbody>
          {props.details.selectedTable === "Table 1" &&
            props.details.map((detail) => {
              <tr>
                <td>
                  {detail.selectedDish}
                  {detail.selectedPrice}
                </td>
              </tr>;
            })}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Table 2</th>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <tr>
            <th>Table 3</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default ShowingDetails;
