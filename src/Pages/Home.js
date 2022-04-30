import React, { useEffect, useRef } from "react";
import introvideo from "../Assets/ayussh.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  let video = useRef(null);
  let one = useRef(null);
  let six = useRef(null);
  let holderone = useRef(null);
  let holdertwo = useRef(null);

  const handleExpand = () => {
    gsap.to(video, {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: 2,
        pin: "main",
      },
      width: "100%",
    });
  };

  const handlePushOne = () => {
    gsap.to(one, {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: 3,
      },
      left: "-100%",
      opacity: 0,
    });
  };

  const handlePushHolderOne = () => {
    gsap.to(holderone, {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: 3,
      },
      left: "-50%",
      opacity: 0,
    });
  };

  const handlePushSix = () => {
    gsap.to(six, {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: 3,
      },
      right: "-100%",
      opacity: 0,
    });
  };

  const handlePushHolderTwo = () => {
    gsap.to(holdertwo, {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: 2,
      },
      right: "-50%",
    });
  };

  useEffect(() => {
    handleExpand();
    handlePushOne();
    handlePushSix();
    handlePushHolderOne();
    handlePushHolderTwo();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        I'm Ayussh Khurana, Content Creator and Standup Comedian
      </h1>

      <main>
        <div className="img-center one" ref={(el) => (one = el)}></div>
        <div className="holder holder-one" ref={(el) => (holderone = el)}>
          <div className="img-center two"></div>
          <div className="img-center three"></div>
        </div>
        <div className="video-player">
          <video
            src={introvideo}
            autoPlay
            loop
            muted
            ref={(el) => (video = el)}
          />
        </div>
        <div className="holder holder-two" ref={(el) => (holdertwo = el)}>
          <div className="img-center four"></div>
          <div className="img-center five"></div>
        </div>
        <div className="img-center six" ref={(el) => (six = el)}></div>
      </main>
      <div className="sections">
        <p>Blog</p>
        <p>Work</p>
        <p>Newsletter</p>
      </div>
    </div>
  );
};

export default Home;
