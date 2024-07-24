"use client";
import styles from "./EventCard.module.css";
interface ECardProps {
  day: string;
  date: string;
  heading: string;
}
const ECardProps = ({ day, date, heading }: ECardProps) => {
  return (
    <>
      <div className={styles.frame64}>
        <div className={styles.frame56}>
          <span
            style={{
              width: "73px",
              height: "73px",
              fontWeight: "400",
              fontSize: "56px",
              lineHeight: "72.8px",
              color: "rgba(10,1,23,1",
            }}
          >
            {day}
          </span>
          <br />
          <span
            style={{
              width: "50px",
              height: "29px",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "28.8px",
              color: "rgba(105,111,140,1",
            }}
          >
            {date}
          </span>
        </div>
        <div className={styles.frame60}>
          <span
            style={{
              width: "388px",
              height: "34px",
              fontWeight: "500",
              fontSize: "26px",
              lineHeight: "33.8px",
              color: "rgba(10,1,23,1",
            }}
          >
            {heading}
          </span>
        </div>
        <div className={styles.frame59}>
          <span
            style={{
              width: "181px",
              height: "32px",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "32.4px",
              color: "rgba(10,1,23,1",
            }}
          >
            07:00 AM - 10:00 PM
          </span>
          <br />
          <span
            style={{
              width: "101px",
              height: "32px",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "32.4px",
              color: "rgba(10,1,23,1",
            }}
          >
            Kathmandu
          </span>
        </div>
      </div>
    </>
  );
};

export default ECardProps;
