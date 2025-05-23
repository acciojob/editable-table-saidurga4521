import React, { useRef } from "react";
import "./../styles/App.css";

const App = () => {
  const IntialData = [
    {
      id: 1,
      name: "sai",
      age: 22,
    },
    {
      id: 2,
      name: "durga",
      age: 23,
    },
    {
      id: 3,
      name: "prasad",
      age: 21,
    },
    {
      id: 4,
      name: "sathish",
      age: 26,
    },
    {
      id: 5,
      name: "Ram",
      age: 24,
    },
    {
      id: 6,
      name: "siva",
      age: 16,
    },
  ];
  const intialRef = useRef({});
  const handleChange = (id, field, value) => {
    if (!intialRef.current[id]) {
      intialRef.current[id] = { id: id };
    }
    intialRef.current[id][field] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedRows = Object.keys(intialRef.current);
    const numEditedRows = editedRows.map(Number);
    console.log("Edited rows:", numEditedRows);
    intialRef.current = {};
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {IntialData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <input
                    type="text"
                    defaultValue={row.name}
                    onChange={(e) => {
                      handleChange(row.id, "name", e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={row.age}
                    onChange={(e) => {
                      handleChange(row.id, "age", e.target.value);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default App;
