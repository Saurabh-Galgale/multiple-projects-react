import { useState } from "react";

export default function LiveColourPicker() {
  const [bgColour, setBgColour] = useState("");
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
        }}
      >
        <h2>Live colour picker</h2>
        <p>Choose the color for this box from the below palette.</p>

        <input type="color" onChange={(e) => setBgColour(e.target.value)} />
      </div>
    </>
  );
}
