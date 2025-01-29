import { useState } from "react";

export default function LiveColourPicker() {
  const [bgColour, setBgColour] = useState("#000");
  return (
    <>
      <div
        style={{
          backgroundColor: bgColour,
          width: "50%",
          height: "50%",
          padding: "10px",
          wordBreak: "break-word",
          border: "1px solid white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "background-color 0.4s ease-in-out",
        }}
      >
        <h2>Live colour picker</h2>
        <p>Choose the color for this box from the below palette.</p>

        <label
          htmlFor="colorPicker"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: bgColour,
            border: "2px solid #fff",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Pick a Color
        </label>

        <input
          type="color"
          id="colorPicker"
          value={bgColour}
          style={{ visibility: "hidden" }}
          onChange={(e) => setBgColour(e.target.value)}
        />
        <p>
          Selected Color: <strong>{bgColour}</strong>
        </p>
      </div>
    </>
  );
}
