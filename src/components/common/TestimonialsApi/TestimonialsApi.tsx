"use client";
import Image from "next/image";
import styles from "./TestimonialsApi.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TestimonialsApi() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function Data() {
      const url = await axios.get(
        `https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json`
      );
      setIndex(url.data.testimonial[index]);
      console.log(url.data.testimonial[index]);
    }
    Data();
  }, []);

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handlePrev = () => {
    setIndex(index - 1);
  };

  return (
    <div className="content">
      <Image src={index.imagePath} alt="testimonial" width={452} height={560} />
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
          {index.content}
        </p>
        <p
          style={{
            width: "auto",
            height: "23px",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "23.4px",
          }}
        >
          {index.fullName}
        </p>
        <div style={{ width: "120px", height: "52px" }}>
          <KeyboardArrowLeftIcon
            onClick={handlePrev}
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
            onClick={handleNext}
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
  );
}
