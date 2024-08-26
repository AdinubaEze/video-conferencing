import { Crown, Star } from "lucide-react";
import { user10, user7, user8, user9 } from "../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Samuel Eze",
    image: user7,
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur animi excepturi ea tempora iste numquam`,
  },
  {
    name: "Emmanuel Joseph",
    image: user8,
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur animi excepturi ea tempora iste numquam`,
  },
  {
    name: "Gloria Chiwendu",
    image: user9,
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur animi excepturi ea tempora iste numquam`,
  },
  {
    name: "Precious Stone",
    image: user10,
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur animi excepturi ea tempora iste numquam`,
  },
];

const Testimonials = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });

      timeline
        .from(".main-title", { opacity: 0, x: -50 })
        .from(".text-muted", { opacity: 0, x: -50 })
        .from(".review-card", { opacity: 0, y: 100, stagger: 1 });
    },
    { scope: container }
  );

  return (
    <div className="py-20 max-w-screen-lg mx-auto" ref={container}>
      <div className="max-w-[800px] mx-auto p-4">
        <h1 className="main-title">What peaple are saying about OneMeet</h1>
        <p className="text-sm text-muted text-center mt-6">
          Discover what users are saying about OneMeet and how it enhances their
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 p-4 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div
            className="p-4 shadow-card-inset rounded-3xl review-card"
            key={testimonial.image}
          >
            <div className="flex items-center gap-2 text-yellow-500">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="my-4">
              <p className="text-sm text-muted">{testimonial.review}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-profile">
                <img src={testimonial.image} alt="" />
              </div>
              <div>
                <h3 className="text-sm">{testimonial.name}</h3>
                <div className="flex items-center gap-2 text-muted text-sm">
                  <Crown size={14} className="text-primary" /> Pro user
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
