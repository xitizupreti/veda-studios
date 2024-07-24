import Image from "next/image";
import styles from "./Testimonials.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Heading from "../common/Heading/Heading";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <Heading
        subHeading="Testimonials"
        heading="Check what our volunteers are saying"
        description="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />
      <div className="content">
        <Image
          src="/testimonialsGirl.png"
          alt="a girl"
          width={452}
          height={560}
        />
        <div className={styles.frame68}>
          <FormatQuoteIcon
            style={{
              width: "45px",
              height: "40.5px",
              transform: "rotate(180deg)",
            }}
          />
          <p
            style={{
              width: "815px",
              height: "172px",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "43.2px",
            }}
          >
            Volunteering with fourpaws is incredibly fulfilling. Seeing rescued
            animals thrive is rewarding beyond words. The dedication of the team
            inspires me daily, and this experience has enriched my life in
            countless, meaningful ways.
          </p>
          <p
            style={{
              width: "54px",
              height: "23px",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "23.4px",
            }}
          >
            Gal G.
          </p>
          <div style={{ width: "120px", height: "52px" }}>
            <KeyboardArrowLeftIcon
              style={{
                marginLeft: "2px",
                padding: "16px",
                color: "rgba(216,197,183,1)",
                borderRadius: "50%",
                backgroundColor: " rgba(253,247,244,1)",
                height: "52px",
                width: "52px",
              }}
            />
            <KeyboardArrowRightIcon
              style={{
                padding: "16px",
                color: "rgba(255,255,255,1)",
                borderRadius: "50%",
                backgroundColor: " rgba(139, 69, 19, 1)",
                height: "52px",
                width: "52px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
