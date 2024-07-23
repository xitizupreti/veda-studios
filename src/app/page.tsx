import Image from "next/image";
import styles from "./page.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div style={{ display: "grid" }}>
          <div className={styles.nav}>
            <span className={styles.frame4}>
              <Image src="/Logos.png " alt="logo" width={114} height={35} />
              <ul className={styles.frame2}>
                <li>
                  Campaigns & Topics
                  <KeyboardArrowDownIcon />
                </li>
                <li>
                  Animals
                  <KeyboardArrowDownIcon />
                </li>
                <li>
                  About us
                  <KeyboardArrowDownIcon />
                </li>
                <li>Contact</li>
              </ul>
            </span>
            <div className={styles.frame3}>
              <button id={styles.navbut1}>Volunteer</button>
              <button className={styles.navbut2}>Donate</button>
            </div>
          </div>
        </div>
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
                  width: "220px",
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
              We advocate for vulnerable animals, providing safety while
              promoting responsible pet
              <br />
              ownership. We uplift both animals and communities.
            </p>
          </div>
          <button
            className={styles.navbut2}
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
      <div style={{ display: "grid" }}>
        <div className={styles.about}>
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
                Who we are and our mission
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
                About our shelter and values
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
              We advocate for vulnerable animals, providing safety while
              promoting responsible pet ownership. We
              <br />
              uplift both animals and communities.
            </p>
          </div>
          <div className={styles.content}>
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
                  As a pioneer of the no-kill movement,{" "}
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "32.4px",
                      color: "rgba(105,111,140,1)",
                    }}
                  >
                    Paw Print
                  </span>{" "}
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
            className={styles.navbut2}
            style={{
              height:"56px",
              width:"242px",
              padding:"16px,40px,16px,40px" ,
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "24px",
              marginTop:"50px"
            }}
          >
            Donate for pets
            <ArrowForwardIcon
              style={{ height: "16px", width: "16px", marginLeft: "8px" }}
            />
          </button>            </div>
            <Image
              src="/dogrun.png"
              alt="dogs"
              width={747}
              height={430}
              style={{ borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
