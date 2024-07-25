import Image from "next/image";
import styles from "./About.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from "../common/Heading/Heading";

export default function About() {
  return (
    <div className={styles.about}>
      <Heading
        subHeading="Who we are and our mission"
        heading="About our shelter and values"
        description="We advocate for vulnerable animals, providing safety while
              promoting responsible pet ownership. We
              uplift both animals and communities."
      />
      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "500",
              lineHeight: "46.8px",
              textAlign: "left",
              color: "rgba(10, 1, 23, 1)",
            }}
          >
            Your donations help us run important projects
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "32.4px",
              textAlign: "left",
              color: "rgba(105, 111, 140, 1)",
            }}
          >
            As a pioneer of the no-kill movement,
            <span
              style={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "32.4px",
                color: "rgba(105,111,140,1)",
                padding: "0px 4px 0px 4px",
              }}
            >
              Paw Print
            </span>
            leads the way with national and international programs designed to
            increase adoptions and raise awareness about the plight of homeless
            animals, continuing to make a significant impact.
          </p>

          <button
            className="navButton2"
            style={{
              width: "fit-content",
              padding: "16px 40px 16px 40px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Donate for pets
            <ArrowForwardIcon
              style={{
                height: "16px",
                width: "16px",
                marginLeft: "8px",
              }}
            />
          </button>
        </div>
        <Image
          src="/dogrun.png"
          alt="dogs"
          width={747}
          height={430}
          className={styles.image}
        />
      </div>
    </div>
  );
}
