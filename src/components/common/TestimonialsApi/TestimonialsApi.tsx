"use client";
import Image from "next/image";
import styles from "./TestimonialsApi.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import axios from "axios";
import { useEffect, useState } from "react";

interface Testimonial {
  imagePath: string;
  content: string;
  fullName: string;
}

export default function TestimonialsApi() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function Data() {
      const url = await axios.get(
        `https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json`
      );
      setData(url.data.testimonial);
      console.log(url.data.testimonial);
    }
    Data();
  }, []);

  const handleNext = () => {
    // setIndex((prevIndex) => (prevIndex + 1) % data.length);
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    // setIndex((prevIndex) =>
    //   prevIndex === 0 ? data.length - 1 : prevIndex - 1
    // );
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  const currentTestimonial = data[index];
  return (
    <div className="content">
      <Image
        src={currentTestimonial.imagePath}
        alt="testimonial"
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
          {currentTestimonial.content}
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
          {currentTestimonial.fullName}
        </p>
        <div style={{ width: "120px", height: "52px" }}>
          <KeyboardArrowLeftIcon
            onClick={handlePrev}
            style={{
              padding: "16px",
              cursor: index === 0 ? "default" : "pointer",
              color:
                index === 0 ? "rgba(216,197,183,1)" : "rgba(255,255,255,1)",
              backgroundColor:
                index === 0 ? "rgba(253,247,244,1)" : "rgba(139, 69, 19, 1)",
              borderRadius: "50%",
              height: "52px",
              width: "52px",
            }}
          />
          <KeyboardArrowRightIcon
            onClick={handleNext}
            style={{
              marginLeft: "2px",
              padding: "16px",
              borderRadius: "50%",
              height: "52px",
              width: "52px",
              cursor: index === data.length - 1 ? "default" : "pointer",
              color:
                index === data.length - 1
                  ? "rgba(216,197,183,1)"
                  : "rgba(255,255,255,1)",
              backgroundColor:
                index === data.length - 1
                  ? "rgba(253,247,244,1)"
                  : "rgba(139, 69, 19, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
