import styles from "./Heading.module.css";

interface HeadingProps {
  subHeading: string;
  heading: string;
  description: string;
}

const Heading = ({ subHeading, heading, description }: HeadingProps) => {
  return (
    <div className={styles.heading}>
      <div className={styles.frame100}>
        <p
          style={{
            width: "815px",
            height: "25px",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "25.2px",
            textAlign: "center",
            color: "rgba(139, 69, 19, 1)",
          }}
        >
          {subHeading}
        </p>
        <p
          style={{
            width: "815px",
            height: "55px",
            fontSize: "42px",
            fontWeight: "500",
            lineHeight: "54.6px",
            textAlign: "center",
            color: "rgba(10, 1, 23, 1)",
          }}
        >
          {heading}
        </p>
      </div>
      <p
        style={{
          width: "936px",
          height: "64px",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "32.4px",
          textAlign: "center",
          color: "rgba(105, 111, 140, 1)",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Heading;
