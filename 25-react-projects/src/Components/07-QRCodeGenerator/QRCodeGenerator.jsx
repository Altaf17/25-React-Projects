import React, { useState } from "react";
import "./QRCodeGenerator.css";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div>
      <h1>QRCodeGenerator</h1>
      <div className="">
        <input
          type="text"
          placeholder="Enter Your Value here"
          name="qr-code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      <br />
      <div className="">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
