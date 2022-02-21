import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineAnimation: React.FC<any> = (
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
	let divRef = useRef<null | HTMLDivElement>(null);
	useEffect(() => {
		let tween: any;

		if (divRef.current) {
			tween = gsap.timeline(
				{
					opacity: 0,
					delay,
					duration,
					scrollTrigger: {
						trigger: divRef.current,
						start: ".header-scroll",
						endTrigger: ".footer",
						toggleClass,
						scrub: true,
						//toggleActions: 'play none none reverse',
					},
				},
			);
		}
		// return () => {
		// 	if (tween) {
		// 		tween.kill();
		// 	}
		// };
	}, [divRef, toggleClass, delay, duration]);
	return (
		<Component ref={divRef} {...props}>
			{children}
		</Component>
	);
};

export default TimelineAnimation;