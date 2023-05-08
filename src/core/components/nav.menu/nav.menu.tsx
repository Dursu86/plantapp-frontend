import { Link } from "react-router-dom";
import { MenuOption } from "../header/header.js";
import styles from "./nav.menu.module.scss";

export type MenuProps = {
  options: MenuOption[];
};

export function NavMenu({ options }: MenuProps) {
  return (
    <nav>
      <ul className={styles.ul}>
        {options.map((item: MenuOption) => (
          <li key={item.path} className={styles.icons}>
            <Link to={item.path}>
              <img src={item.img} className={styles.icon} alt="test" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
