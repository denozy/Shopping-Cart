import React from "react";
import styles from "../styles/gamepage.module.css";
const PreviewImg = ({ handleImageClick, screenshot, index }) => {
  return (
    <img
      onClick={() => handleImageClick(index)}
      value={index}
      className={styles.previewImg}
      src={screenshot.image}
      alt={`screenshot ${index + 1}`}
    />
  );
};

export default PreviewImg;
