import { useEffect, useState } from "react";

const RandomColors = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const handleCreateRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (colorType === "rgb") {
      handleCreateRgbColor();
    }
    handleCreateHexColor();
  }, [colorType]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setColorType("hex")}> Create HEX Colors</button>
      <button onClick={() => setColorType("rgb")}> Create RGB Colors</button>
      <button
        onClick={
          colorType === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        {" "}
        Generate Random Colors
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{colorType === "hex" ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColors;
