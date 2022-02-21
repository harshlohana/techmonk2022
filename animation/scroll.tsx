import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation: React.FC<any> = (
	{ children,
		wrapperElement = "div",
		direction = null,
		delay = 0,
		distance = 200,
		//scrub = false,
		duration = 2,
		start,
		end,
		pin = false,
		markers = false,
		toggleClass,
		...props }) => {
	const Component = wrapperElement;
	let scrollRef = useRef<null | HTMLDivElement>(null);
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

		if (scrollRef.current) {
			tween = gsap.timeline(
				{
					...fadeDirection,
					opacity: 0,
					delay,
					duration,
					scrollTrigger: {
						trigger: scrollRef.current,
						start,
						end,
						toggleClass,
						scrub: true,
						once: true,
					},
				},
			);
		}
		return () => {
			if (tween) {
				tween.kill();
			}
		};
	}, [scrollRef, fadeDirection, toggleClass, delay, duration, start, end]);
	return (
		<Component ref={scrollRef} {...props}>
			{children}
		</Component>
	);
};

export default ScrollAnimation;