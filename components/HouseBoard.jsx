import styles from "../styles/house.module.css";
export default function HouseBoard(props) {
  return (
    <div
      style={{ backgroundColor: props.black ? "#000" : "#fff" }}
      className={styles.houses}
    ></div>
  );
}
