import css from "./page.module.css";
import { MainPage } from "@/components";

async function Home() {
  return (
    <div className={css.container}>
      <MainPage />
    </div>
  );
}
export default Home;
