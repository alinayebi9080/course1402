import styles from "./assets/css/button.module.css";

const ButtonModular = ({ label }) => {
  return <button className={styles.bgRed}>{label}</button>;
};

export default ButtonModular;
