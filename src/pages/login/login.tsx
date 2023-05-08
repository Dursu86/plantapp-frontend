import { Link } from "react-router-dom";
import { LogUserForm } from "../../core/components/forms/user.forms";
import styles from "./login.module.scss";

export default function LoginPage() {
  return (
    <>
      <img
        src="../../../assets/login-photo.png"
        alt="login"
        className={styles.photo}
      />
      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.h1}>
            Welcome <span className={styles.green}>Plantlover</span>
          </h1>
          <h2 className={styles.h2}>Login to your account</h2>
        </div>
        <section className={styles.form}>
          <LogUserForm></LogUserForm>
          <p className={styles.sublogin}>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </section>
      </main>
      <p></p>
    </>
  );
}
