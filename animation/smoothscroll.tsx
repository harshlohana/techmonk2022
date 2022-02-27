import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
const SmoothScroll: React.FC<any> = (
	{ children,
		wrapperElement = "div",
		...props }) => {
	const Component = wrapperElement;
	let smoothScrollRef = useRef<null | HTMLDivElement>(null);
	useEffect(
		() => {
			const element = document.querySelector('#product-section');
			const trigger = document.querySelector('.smooth-arrow');
			trigger.addEventListener('click', () => {
				gsap.to(window, {
					scrollTo: element,
					speed: 2,
				});
			});
		},
		[smoothScrollRef],
	);
	return (
		<Component ref={smoothScrollRef} {...props}>
			{children}
		</Component>
	);
};

export default SmoothScroll;