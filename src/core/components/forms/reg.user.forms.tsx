/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../../features/users/hooks/use.users";
import { User } from "../../../features/users/models/user.model";
import { UsersApiRepo } from "../../../features/users/services/users.api.repo";
import styles from "./regform.module.scss";

export function RegUserForm() {
  const repo = useMemo(() => new UsersApiRepo(), []);
  const { register } = useUsers(repo);

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formRegUser = ev.currentTarget;
    const regUser: Partial<User> = {
      name: (formRegUser.elements[0] as HTMLInputElement).value,
      email: (formRegUser.elements[1] as HTMLInputElement).value,
      passwd: (formRegUser.elements[2] as HTMLInputElement).value,
    };
    register(regUser);

    formRegUser.reset();
  };

  return (
    <>
      <form className={styles.form} data-testid="form" onSubmit={handleSubmit}>
        <section className={styles.inputs}>
          <input
            type="text"
            placeholder="name"
            className={styles.name}
            name="name"
          />
          <input
            type="text"
            placeholder="Email"
            className={styles.email}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.passwd}
            name="password"
            role="textbox"
          />
        </section>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </>
  );
}
