import styles from "./Footer.module.css";
import Image from "next/image";
import MenuProps from "../common/MenuContainer/Menu";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <Image src="/LogoBlack.png" alt="Black Logo" width={128} height={36} />
        <div
          style={{
            height: "211px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MenuProps
            heading="Quick Links"
            list1="About Us"
            list2="Get Involved"
            list3="Contact Us"
            list4="Media"
          />
          <br />
          <MenuProps
            heading="Resources"
            list1="Animal Safety"
            list2="Programs"
            list3="Events"
            list4="Alumni"
          />
          <MenuProps
            heading="Ways to Give"
            list1="Find a Family"
            list2="Donation"
            list3="Volunteer"
            list4="Give a Gift"
          />
          <div className={styles.social}>
            <span
              style={{
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "23.4px",
                color: "rgba(53,51,51,1)",
              }}
            >
              SOCIAL MEDIA
            </span>
            <p
              style={{
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "32.4px",
                color: "rgba(53,51,51,1)",
              }}
            >
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "124px",
              }}
            >
              <Image src="/Twitter.svg" alt="Twitter" height={20} width={20} />
              <Image
                src="/Facebook.svg"
                alt="Facebook"
                height={20}
                width={20}
              />
              <Image src="/Insta.svg" alt="Instagram" height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span
          style={{
            width: "422px",
            height: "32px",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "32.4px",
            color: "rgba(53,51,51,1)",
          }}
        >
          Copyright © 2024 fourpaws. All Rights Reserved
        </span>
        <ol
          style={{
            listStyleType: "none",
            display: "flex",
            width: "532px",
            height: "32px",
            justifyContent: "space-around",
          }}
        >
          <li className={styles.Li}>Terms of Service</li>
          <li className={styles.Li}>Privacy Policy</li>
          <li className={styles.Li}>Security</li>
          <li className={styles.Li}>Sitemap</li>
        </ol>
      </div>
    </div>
  );
}
