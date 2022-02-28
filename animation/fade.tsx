import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const FadeInAnimation: React.FC<any> = (
  { children,
    wrapperElement = "div",
    direction = null,
    delay = 0,
    distance = 200,
    scrub = false,
    duration = 2,
    start,
    end,
    pin = false,
    markers = false,
    toggleClass,
    ...props }) => {
  const Component = wrapperElement;
  let compRef = useRef<null | HTMLDivElement>(null);
  // const distance = 200;
  let fadeDirection: any;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }

  useEffect(() => {
    let tween: any;

    if (compRef.current) {
      tween = gsap.from(
        compRef.current, 1,
        {
          ...fadeDirection,
          opacity: 0,
          delay,
          distance,
          duration,
        },
      );
    }
    return () => {
      if (tween) {
        tween.kill();
      }
    };
  }, [compRef, fadeDirection, delay, distance, duration, scrub, start, end, pin, markers, toggleClass]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};


export default FadeInAnimation;