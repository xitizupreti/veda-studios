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
      <div className="content">
        <div className={styles.frame13}>
          <div className={styles.frame12}>
            <p
              style={{
                width: "577px",
                height: "94px",
                fontSize: "36px",
                fontWeight: "500",
                lineHeight: "46.8px",
                textAlign: "left",
                color: "rgba(10, 1, 23, 1)",
              }}
            >
              Your donations help us run
              <br />
              important projects
            </p>
            <p
              style={{
                width: "529px",
                height: "128px",
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
              leads the
              <br />
              way with national and international programs designed to
              <br />
              increase adoptions and raise awareness about the plight of
              <br />
              homeless animals, continuing to make a significant impact.
            </p>
          </div>
          <button
            className="navbut2"
            style={{
              height: "56px",
              width: "242px",
              padding: "16px,40px,16px,40px",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "24px",
              marginTop: "50px",
            }}
          >
            Donate for pets
            <ArrowForwardIcon
              style={{ height: "16px", width: "16px", marginLeft: "8px" }}
            />
          </button>
        </div>
        <Image
          src="/dogrun.png"
          alt="dogs"
          width={747}
          height={430}
          style={{ borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}
