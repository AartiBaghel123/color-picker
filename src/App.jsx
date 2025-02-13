// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from "react";

function ColorBox({ color, onColorSelect }) {
  return (
    <div
      onClick={() => onColorSelect(color)}
      style={{
        backgroundColor: color,
        width: "30%",
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "10px",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.05)";
        e.target.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "none";
      }}
    >
      {color.toUpperCase()}
    </div>
  );
}

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [colors, setColors] = useState([
    "#ff5733",
    "#33ff57",
    "#3357ff",
    "#f9f9f9",
    "#ff0",
    "#ff6347",
  ]);
  const [newColor, setNewColor] = useState("");

  const handleColorSelect = (color) => {
    setBgColor(color);
  };

  const addNewColor = () => {
    if (newColor && /^#([0-9A-F]{3}){1,2}$/i.test(newColor)) {
      setColors([...colors, newColor]);
      setNewColor("");
    } else {
      alert("Please enter a valid hex color (e.g., #ff5733)");
    }
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.5s ease",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "10px" }}>Color Picker</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(30%, 1fr))",
          gap: "15px",
          width: "80vw",
        }}
      >
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} onColorSelect={handleColorSelect} />
        ))}
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          placeholder="Enter a color (e.g., #ff5733)"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "200px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={addNewColor}
          style={{
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          Add Color
        </button>
      </div>
    </div>
  );
}

export default App;



