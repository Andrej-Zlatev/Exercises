import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <ul className={styles.menuList}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Partnership</a>
      </li>
      <li>
        <a href="#">Shop</a>
      </li>
    </ul>
  );
};

export default Navigation;
