import Image from "next/image";
import styles from "./CTA.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from "../common/Heading/Heading";

export default function CTA() {
  return (
    <>
      <div className={styles.ctaContainer}>
        <div className={styles.cta}>
          <Image
            src="/el1.png"
            alt="ellipse 1"
            width={210}
            height={210}
            style={{
              position: "absolute",
              left: "0",
            }}
          />
          <Image
            src="/Dogcta.png"
            alt="dog"
            width={393}
            height={373}
            style={{ position: "relative" }}
            className={styles.image}
          />
          <div className={styles.ctaContent}>
            <Heading
              colorC="rgba(255,255,255,1)"
              subHeading=""
              heading="Get Involved"
              description="Our work is made possible by the generosity of people like you, who have contributed to
our mission to improve the lives of all animals."
            />
            <div className={styles.ctaButton}>
              <button
                className="navbut2"
                style={{
                  backgroundColor: "rgba(255,255,255,1)",
                  color: "rgba(139,69,19,1)",

                  width: "330px",
                  //   padding: "16px 40px 16px 40px",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                Adopt & Donate to help us
                <ArrowForwardIcon
                  style={{
                    height: "16px",
                    width: "16px",
                    marginLeft: "8px",
                  }}
                />
              </button>
              <button
                className="navbut2"
                style={{
                  backgroundColor: "rgba(255,255,255,1)",
                  color: "rgba(139,69,19,1)",
                  width: "338px",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                Volunteering opportunities
                <ArrowForwardIcon
                  style={{
                    height: "16px",
                    width: "16px",
                    marginLeft: "8px",
                  }}
                />
              </button>
            </div>
          </div>
          <Image
            src="/el2.png"
            alt="ellipse 2"
            width={210}
            height={210}
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
          />

          <Image
            src="/animal.png"
            alt="cat"
            width={204}
            height={327}
            style={{
              position: "relative",
              right: "0",
              top: "100px",
            }}
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
}
