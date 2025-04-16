import MainArena from "@/components/MainArena";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainArena />
      <Footer />
    </div>
  );
}