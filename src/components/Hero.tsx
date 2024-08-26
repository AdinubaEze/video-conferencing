import { Link } from "react-router-dom";
import DashboardUI from "./ui/DashboardUI";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({ delay: 1 });
      timeline
        .from(".main-title", { opacity: 0, y: -50 })
        .from(".join-btn", { opacity: 0, x: -50 })
        .from(".dashboard", { opacity: 0, y: 100 });
    },
    { scope: container }
  );
  return (
    <div className="max-w-screen-lg mx-auto py-24" ref={container}>
      <div className="flex flex-col items-center justify-center gap-6 p-4">
        <h1 className="main-title">
          Experience Unlimited Connectivity with <span>OneMeet</span> Video
          Conferencing
        </h1>
        <div className="join-btn">
          <Link
            to={"/join"}
            target="_blank"
            className="btn primary shadow-card-inset text-lg py-3"
          >
            Get started for free
          </Link>
        </div>
      </div>
      <div className="dashboard my-4 p-4">
        <DashboardUI />
      </div>
    </div>
  );
};

export default Hero;
