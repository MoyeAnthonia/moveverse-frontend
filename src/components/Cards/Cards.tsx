import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Cards.module.css";

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon shown in the tile at the top of the card (SVG, lucide icon, etc.). */
  icon: ReactNode;
  /** Card heading, rendered in the pixel display font. */
  title: string;
  /** Supporting copy beneath the title. */
  description: string;
}

function FeatureCard({ icon, title, description, className, ...rest }: FeatureCardProps) {
  return (
    <article className={[styles.step, className].filter(Boolean).join(" ")} {...rest}>
      <div className={styles.stepIcon} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export { FeatureCard };
