import Hero from "@/components/Hero/Hero";
import About from "@/components/AboutUs/About";
import Cause from "@/components/Cause/Cause";

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
    </div>
  );
}
