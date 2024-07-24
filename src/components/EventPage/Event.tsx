import styles from "./Event.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from "../common/Heading/Heading";
import ECardProps from "../common/EventCard/EventCard";
export default function Event() {
  return (
    <div className={styles.events}>
      <Heading
        subHeading="Calender"
        heading="Event Schedule"
        description="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />
      <div style={{ display: "flex", gap: "56px" }}>
        <ECardProps
          day="08"
          date="June"
          heading="Disaster Relief for Animals"
        />
        <ECardProps day="12" date="June" heading="Rapid Response for Animals" />
        <ECardProps
          day="17"
          date="June"
          heading="Disaster Relief for Animals"
        />
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
        View All
        <ArrowForwardIcon
          style={{ height: "16px", width: "16px", marginLeft: "8px" }}
        />
      </button>
    </div>
  );
}
