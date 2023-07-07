import { useState } from "react";
import styles from "./InputPassword.module.scss";
import style from "./InputText.module.scss";

const InputPassword = ({ name, id, placeholder }) => {
  const [inputPassword, setInputPassword] = useState(false);

  const onHandleClick = () => {
    setInputPassword(!inputPassword);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.inputContainer}>
        <input
          className={style.input}
          type={inputPassword ? "text" : "password"}
          name={name}
          id={id}
          placeholder={placeholder}
        />
        <span className={styles.icon} onClick={() => onHandleClick()}>
          {inputPassword ? "🐵" : "🙈"}
        </span>
      </label>
    </div>
  );
};
export default InputPassword;
