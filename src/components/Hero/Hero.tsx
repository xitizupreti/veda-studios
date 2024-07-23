import Image from "next/image";
import styles from "./Hero.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "@/components/Navbar/Navbar";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.arrow}>
        <KeyboardArrowUpIcon
          fontSize="large"
          style={{
            borderRadius: "50%",
            backgroundColor: " rgba(255, 255, 255, 1)",
            height: "52px",
            width: "52px",
          }}
        />
        <KeyboardArrowDownIcon
          fontSize="large"
          style={{
            borderRadius: "50%",
            backgroundColor: " rgba(255, 255, 255, 1)",
            height: "52px",
            width: "52px",
          }}
        />
      </div>
      <div className={styles.heroText}>
        <div className={styles.frame6}>
          <div className={styles.frame10}>
            <p
              style={{
                width: "225px",
                height: "25px",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "25.2px",
                letterSpacing: "0.15em",
                textAlign: "left",
                textTransform: "uppercase",
              }}
            >
              Saving lives every day
            </p>
            <p
              style={{
                width: "815px",
                height: "140px",
                fontSize: "54px",
                fontWeight: "700",
                lineHeight: "70.2px",
              }}
            >
              Saving lives of cats and
              <br />
              dogs across world
            </p>
          </div>
          <p
            style={{
              width: "816px",
              height: "64px",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "32.4px",
            }}
          >
            We advocate for vulnerable animals, providing safety while promoting
            responsible
            <br />
            pet ownership. We uplift both animals and communities.
          </p>
        </div>
        <button
          className="navbut2"
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "24px",
          }}
        >
          About Us
          <ArrowForwardIcon
            style={{ height: "16px", width: "16px", marginLeft: "8px" }}
          />
        </button>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.rectangle}>
          <Image
            src="/animal.png"
            alt="cat"
            width={348}
            height={557}
            style={{ position: "relative", left: "36px", top: "66px" }}
          />
        </div>
      </div>
    </div>
  );
}
