import styles from "./page.module.css";
import Page_A from "./home/components/Page_A";
import Page_B from "./home/components/page_B";
import Page_C from "./home/components/page_C";
import Page_D from "./home/components/page_D";
import Page_E from "./home/components/page_E";

export default function Home() {
  return (
    <div className={styles.page}>
      <Page_A />
      <Page_B />
      <Page_C />
      <Page_D />
      <Page_E />
    </div>
  );
}
