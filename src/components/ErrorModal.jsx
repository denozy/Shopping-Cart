import React from "react";
import styles from "../styles/errorModal.module.css";

const ErrorModal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Error</h2>
        <p className={styles.modalMessage}>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
