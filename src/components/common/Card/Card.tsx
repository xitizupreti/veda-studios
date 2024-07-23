"use client";
import styles from "./Card.module.css";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProgressBar from "@ramonak/react-progress-bar";

interface CardProps {
  image: string;
  heading: string;
  description: string;
}

const Card = ({ image, heading, description }: CardProps) => {
  return (
    <>
      <div className={styles.card}>
        <Image src={image} alt="CardImage" width={452} height={302} />
        <div className={styles.frame41}>
          <div className={styles.frame39}>
            <div className={styles.frame38}>
              <span>Goal : $1340</span>
              <span>Raised : $800</span>
            </div>
            <ProgressBar
              completed={60}
              customLabel="60%"
              // completedClassName="customCompleted"
              bgColor="rgba(139, 69, 19, 1)"
              height="6px"
              width="388px"
              isLabelVisible={false}
            />
          </div>
          <div className={styles.frame40}>
            <p
              style={{
                width: "318px",
                height: "34px",
                fontSize: "26px",
                fontWeight: "500",
                lineHeight: "33.8px",
                textAlign: "left",
                color: "rgba(10, 1, 23, 1)",
              }}
            >
              {heading}
            </p>
            <p
              style={{
                width: "388px",
                height: "64px",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "32.4px",
                color: "rgba(105, 111, 140, 1)",
              }}
            >
              {description}
            </p>
            <p
              style={{
                color: "rgba(139,69,19,1)",
                width: "145px",
                height: "25px",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "25.2px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              View Details
              <ArrowForwardIcon
                style={{ height: "16px", width: "16px", marginLeft: "8px" }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
