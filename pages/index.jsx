import HouseBoard from "../components/houseBoard";
import Lines from "../components/Lines";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Lines />
      <Lines black />
      <Lines />
      <Lines black />
      <Lines />
      <Lines black />
      <Lines />
      <Lines black />
    </div>
  );
}
