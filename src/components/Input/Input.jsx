import React from "react";
import styles from'./Input.module.css'

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={styles.inputWrap}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
