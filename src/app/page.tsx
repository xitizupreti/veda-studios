import Hero from "@/components/Hero/Hero";
import About from "@/components/AboutUs/About";
import Cause from "@/components/Cause/Cause";
import Donation from "@/components/Donation/Donation";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Hero />
      <About />
      <Cause />
      <Donation />
    </div>
  );
}
