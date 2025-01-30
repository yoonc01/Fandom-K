import React, { useState, useEffect } from "react";

const ImageWithBorder = ({ borderColor = "#f96868", size = "128px" }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    
    setImageSrc("https://via.placeholder.com/150");
  }, []);

  if (!imageSrc) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="relative shrink-0"
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="absolute inset-0 rounded-full border-solid"
        style={{
          border: `1.31px solid ${borderColor}`,
        }}
      ></div>
      <div
        className="absolute overflow-hidden bg-white rounded-full"
        style={{
          width: `calc(${size} - 13px)`,
          height: `calc(${size} - 13px)`,
          left: "6.53px",
          top: "6.53px",
        }}
      >
        <img
          className="absolute inset-0 object-cover"
          src={imageSrc}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default ImageWithBorder;
