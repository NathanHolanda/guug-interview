import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <figure>
                    <img src="logo.png" alt="Guug" />
                </figure>
            </Link>
            <ul className={styles.navbarItems}>
                <li>
                    <Link to="/">
                        <span>Início</span>
                    </Link>
                </li>
                <li id="guests">
                    <span>Visitantes</span>
                    <ul className={styles.dropdownList}>
                        <li>
                            <Link to="/accepted">Aceitos</Link>
                        </li>
                        <li>
                            <Link to="/refused">Recusados</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
