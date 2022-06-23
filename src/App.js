// import logo from './logo.svg';
import "./App.css";
import Records from "./record.json";
// import React, { useState, useEffect } from "react";
import { useState } from "react";

function App() {
  const [setQuery] = useState("");

  return (
    <div className="app">
      <center>
        <p className="title">
          {" "}
          <h2>Json DataTable </h2>
        </p>{" "}
      </center>

      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <div className="App">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
          </tr>

          {Records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default App;
