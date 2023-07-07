import styles from "./InputText.module.scss";
const InputText = ({
  id,
  placeholder,
  name,
  errorMessage,
  disable,
  setInputValue,
}) => {
  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <label htmlFor={id}>
      <input
        type="text"
        className={styles.input}
        name={name}
        onChange={onHandleChange}
        id={id}
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className={styles.inputError}>{errorMessage}</span>
      )}
    </label>
  );
};
export default InputText;
