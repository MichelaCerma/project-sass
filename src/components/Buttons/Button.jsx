import styles from "./Button.module.scss";
import { FaArrowRight } from "react-icons/fa6";
const Button = ({ text, icon, iconLeft, border, size }) => {
  return (
    <button
      className={`${styles.Button} 
    ${iconLeft ? styles.iconLeft : ""}
    ${border ? styles.border : ""}
    ${icon ? styles.icon : ""}
    ${size ? styles[size] : styles.xl}
   
    
    `}
    >
      {icon && <FaArrowRight />}
      {text && text}
    </button>
  );
};
export default Button;
