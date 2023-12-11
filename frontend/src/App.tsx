import React, {useEffect, useState} from 'react';
import './App.css';
import axiosInstance from "./api/axiosInstance/axiosInstance";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axiosInstance.get("/api/user").then(
        response => setUserName(response.data.name)
    )
  }, []);

  return (
    <div className="App">
      <h1>Hello, {userName}</h1>
      <ul>
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href={"/list-books"}>List of Books</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
