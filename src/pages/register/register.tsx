import { Link } from "react-router-dom";
import { RegUserForm } from "../../core/components/forms/reg.user.forms";
import styles from "./register.module.scss";

export default function RegisterPage() {
  return (
    <>
      <section className={styles.main}>
        <img src="../../../assets/register.png" alt="" />
        <h1 className={styles.h1}>Register</h1>
        <h2 className={styles.h2}>Create a new account</h2>
        <RegUserForm></RegUserForm>
        <p className={styles.subregister}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </>
  );
}
