import { useState } from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

// declare the props Data type
type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand?: string;
  links?: NavLink[];
};

// Array of Links
const defaultLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Who It's For", href: "#audience" },
  { label: "Games", href: "#games" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar({
  brand = "MoveVerse",
  links = defaultLinks,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.brandLogo}>
        <span className={styles.logoBox}>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M8 5v14l11-7z" fill="var(--accent-cyan, #22d3ee)" />
          </svg>
        </span>
        <span className={styles.brandName}>{brand}</span>
      </a>

   <Button
   className={styles.toggle}
        aria-label="Toggle navigation menu"
             aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        label= {open ? "✕" : "☰"}
      />
{/* Mapping the links array */}
      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <ul className={styles.links}>
          {links.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
                <Button
        label="Start Playing"
        variant="primary"
        aria-label="Start Game"
      />
   <Button
        label="Sign In"
        variant="secondary"
        aria-label="Sign in Account"
      />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
