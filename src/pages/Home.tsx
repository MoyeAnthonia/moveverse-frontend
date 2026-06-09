import styles from "./home.module.css";
import heroImage from "../assets/hero-skyhop-gameplay.jpg";
import iconCamera from "../assets/icon-camera.jpg";
import iconMotion from "../assets/icon-motion.jpg";
import iconPlay from "../assets/icon-play.jpg";
import Button from "../components/Button/Button";
import { Badge } from "../components/Badge/Badge";
import { FeatureCard } from "../components/Cards/Cards";


type Stat = { value: string; label: string };

type HeroProps = {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: Stat[];
};

const defaultStats: Stat[] = [
  { value: "2", label: "Games" },
  { value: "10K+", label: "Players" },
  { value: "★ 4.9", label: "Rating" },
];

const FEATURECARDSARR = [
  {
    title: "Webcam Tracking",
    description:
      "Our AI-powered pose detection tracks your movements in real-time using just your webcam.",
    icon: (
      <img
            src={iconCamera}
            alt="camera icon"
          />
    ),
  },
  {
    title: "Real Exercises",
    description:
      "Do actual push-ups and squats to control your character. Every rep counts toward your progress.",
    icon: (
           <img
            src={iconMotion}
            alt="Motion icon"
          />
    ),
  },
  {
    title: "Track Progress",
    description:
      "Earn XP, unlock badges, and maintain daily streaks. Watch your fitness level up over time.",
    icon: (
      <img
            src={iconPlay}
            alt="play icon"
          />
    ),
  },
];

function Home({
  badge = "Webcam Powered Fitness",
  title = "Get Moving",
  subtitle = "Turn Your Workouts Into Games",
  description = "Use pose detection technology to play arcade-style games while doing real exercises. Each push-up and squat controls your character in real-time.",
  stats = defaultStats,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Badge label={badge} variant="cyan" />
        <h1 className={styles.heroTitle}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Button label="Start Playing" variant="primary" aria-label="Start Playing" />
          <Button label="Watch Demo" variant="secondary" aria-label="Watch App Demo" />
        </div>
      </div>

      <div className={styles.media}>
        <div className={styles.imageFrame}>
          <img
            className={styles.image}
            src={heroImage}
            alt="Player doing a squat to control an arcade game character"
          />
        </div>
      </div>
    </section>
  );
}

function Features({ badge = "Features" }: { badge?: string }) {
  return (
    <section className={styles.how}>
      <div className="wrap">
        <div className={styles.how__head}>
          <Badge label={badge} variant="cyan" />
          <h2 className={styles.how__title}>How It Works</h2>
        </div>

        <div className={styles.how__grid}>
          {FEATURECARDSARR.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Home, Features };
