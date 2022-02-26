import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnhoverEffect: React.FC<any> = (
	{ children,
		wrapperElement = "div",
		...props }) => {
	const Component = wrapperElement;
	let hoverRef = useRef<null | HTMLDivElement>(null);
	useEffect(
		() => {
			const items: any = document.querySelectorAll('.blog-item');
			items.forEach((el) => {
				const image = el.querySelector('img')

				el.addEventListener('mouseenter', (e) => {
					gsap.to(image, { autoAlpha: 1 })
				})

				el.addEventListener('mouseleave', (e) => {
					gsap.to(image, { autoAlpha: 0 })
				})

				el.addEventListener('mousemove', (e) => {
					gsap.set(image, { x: e.offsetX - 200, y: e.offsetY - 50 })
				})
			})
		},
		[hoverRef],
	);
	return (
		<Component ref={hoverRef} {...props}>
			{children}
		</Component>
	);
};

export default OnhoverEffect;