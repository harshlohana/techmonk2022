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

	useEffect(() => {
		let timeline: ReturnType<typeof gsap.timeline>;

		if (scrollRef.current) {
			timeline = gsap.timeline(
				{
					scrollTrigger: {
						trigger: scrollRef.current,
						start: 'center 500px',
						end: '+=100%',
						pin: '.scroller',
						scrub: 0.1,
					},
				},
			).to('.sectoin-text', {
				transform: 'translateX(-100%)',
			});
		}
		return () => {
			ScrollTrigger.getById('home-feature')?.kill?.();
			if (timeline) {
				timeline.kill();
			}
		};
	}, [scrollRef, toggleClass, delay, duration, start, end]);
	return (
		<Component ref={scrollRef} {...props}>
			{children}
		</Component>
	);
};

export default ScrollAnimation;