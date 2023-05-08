import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

export default function Home() {
  const navigate = useNavigate();
  const handleLogin = (): void => {
    navigate("/login");
  };
  const handleRegister = (): void => {
    navigate("/register");
  };

  return (
    <>
      <div className={styles.header}>
        <img
          src="../../../favicon.png"
          alt="PlantApp logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>PlantApp</h1>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleLogin} className={styles.login}>
          Login
        </button>
        <button onClick={handleRegister} className={styles.register}>
          Register
        </button>
      </div>
      <img
        src="../../../assets/planta home.png"
        alt="plant sprout"
        className={styles.sprout}
      />
    </>
  );
}
