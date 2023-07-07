import { useState } from "react";
import styles from "./InputToggle.module.scss";
const InputToggle = ({ toggle }) => {
  const [isToggle, setIsToggle] = useState(toggle);

  const onHandleToggle = () => {
    console.log("click");
  };
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        defaultChecked={isToggle}
        className={styles.input}
        onClick={onHandleToggle}
      />
      <span className={styles.toggle}></span>
    </label>
  );
};
export default InputToggle;
