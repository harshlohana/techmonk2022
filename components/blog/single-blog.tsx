/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import React from 'react';
import Image from 'next/image';
import ScrollAnimation from "../../animation/scroll";
import Banner from './images/banner.png';
import Avatar from './images/avatar.png';
import Img1 from './images/1.png';
import style from './blog.module.scss';
import Button from '../button';


const SingleBlog: React.FC<any> = () => {
	return (
		<>
			<ScrollAnimation
				wrapperElement="div"
				className={cn(style.banner, 'op-0')}
				toggleClass="fade"
			>
				<Image
					src={Banner}
					alt="Techmonk"
				/>
			</ScrollAnimation>
			<div className={cn(style['banner-content'], style.content, 'px-0 section2 mx-auto text-center custom-container')}>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], 'mx-auto op-0 pt-10')}
				>
					<h2 className="font-semibold capitalize mb-3">
						Lorem ipsum dolor sit amet consecte tur adipiscing elit.
					</h2>
					<p className={style['small-text']}>25 August, 2021</p>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], 'text-left mx-auto op-0 pt-20')}
				>
					<p className='font-2'>
						Once I gave the headphones a thorough once-over exam, I tried them on. As I mentioned, they have a classic over-the-ear style and just looking at them, the padding on the ear pieces seem adequate and the peak of the headband seemed to be a bit lacking, but you don&apos;t really know comfort unless you try on the product. So, I slipped the headphones on and found them to be exquisitely comfortable. Once I gave the headphones a thorough once-over exam, I tried them on. As I mentioned, they have a classic over-the-ear style and just looking at them, the padding on the ear pieces seem adequate and the peak of the headband seemed to be a bit lacking, but you don&apos;t really know comfort unless you try on the product. So, I slipped the headphones on and found them to be exquisitely comfortable.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], 'text-left mx-auto op-0 pt-10')}
				>
					<p className='font-2'>
						If no one hates you, no one is paying attention. If attention is what you want for vanity, confidence, or, hell — to make a decent living — then know that it&apos;s not instantaneous. Every single person that you&apos;re currently paying attention to, at some point in their lives.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], 'mx-auto op-0 pt-20')}
				>
					<h3 className="font-semibold capitalize mb-3">
						You need to be true to yourself
					</h3>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], 'text-left mx-auto op-0 pt-10')}
				>
					<p className='font-2'>
						Just like every other human on the planet, I have epically awesome days and days when life just turne against me. And while I can&apos;t stand most self-help (see: tired quotes over stock photography on Instagram), sometimes I need a little pick-me-up. And most of the time, in order to get out of a slump (because my brain leans more into math/science than anything else), I need to drop a logic bomb on my ass.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], 'text-left mx-auto op-0 pt-10')}
				>
					<p className='font-2'>
						Yes, this is a long article. But here&apos;s the thing — if you&apos;re reading this in your inbox and are already like, “fuck this!” delete it. No hard feelings. If you&apos;re reading this in a browser on a website, and you see how tiny the scroll-bar is because of how far you still have to scroll to get to the bottom, close this tab and go back to 140-character tidbits of advice. Still with me? Phew. Just had to weed out all the folks from points: #1, #4 and #8. Welcome friends, onward we go.
					</p>
				</ScrollAnimation>
			</div>
			<div>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					className="mx-auto op-0 pt-10"
				>
					<div className={style['section-img']}>
						<Image
							src={Img1}
							alt="Techmonk"
						/>
					</div>
				</ScrollAnimation>
			</div>
			<div className={cn(style.content, 'section3 mx-auto text-center custom-container')}>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section3'
					className={cn(style['max-w-854'], 'mx-auto op-0 pt-20')}
				>
					<h3 className="font-semibold capitalize mb-3">
						Never give up and stay strong
					</h3>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section3'
					className={cn(style['max-w-854'], 'text-left mx-auto op-0 pt-10')}
				>
					<p className='font-2'>
						If no one hates you, no one is paying attention. If attention is what you want for vanity, confidence, or, hell — to make a decent living — then know that it&apos;s not instantaneous. Every single person that you&apos;re currently paying attention to, at some point in their lives, was in your exact position. They kept at it and worked enough so that others started listening. Also know that if no one is watching, you can experience true freedom. Dance in your underwear. Write entirely for yourself. Like there&apos;s a going-out-of-business sale. Find yourself — not in some coming-of-age hippie way involving pasta and ashrams— but in a way that helps you draw your own line in the sand for what matters and what doesn&apos;t. Do what you want to do, just because you want to do that thing. This will build confidence that will come in handy later.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], 'text-left mx-auto op-0 pt-10')}
				>
					<p className='font-2'>
						Once I gave the headphones a thorough once-over exam, I tried them on. As I mentioned, they have a classic over-the-ear style and just looking at them, the padding on the ear pieces seem adequate and the peak of the headband seemed to be a bit lacking, but you don&apos;t really know comfort unless you try on the product. So, I slipped the headphones on and found them to be exquisitely comfortable. Once I gave the headphones a thorough once-over exam, I tried them on. As I mentioned, they have a classic over-the-ear style and just looking at them, the padding on the ear pieces seem adequate and the peak of the headband seemed to be a bit lacking, but you don&apos;t really know comfort unless you try on the product. So, I slipped the headphones on and found them to be exquisitely comfortable.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section2'
					className={cn(style['max-w-854'], style['share-section'], 'text-left mx-auto op-0 pt-10 mt-20 flex flex-wrap justify-between')}
				>
					<div className="flex items-center pt-4">
						<div className={cn(style['circle-70'], 'flex-shrink-0')}>
							<Image
								className={cn(style['circle-70'], 'rounded-full')}
								src={Avatar}
								alt="Techmonk"
							/>
						</div>
						<div className="ml-4">
							<div className="h5 font-medium mb-3">
								Jennifer Freeman
							</div>
							<div className="font-2 text-sm text-gray-500">
								Editor, Techmonk Team
							</div>
						</div>
					</div>
					<div className='pt-4'>
						<Button className={cn(style['btn-share'], 'bg-transparent hover:bg-white text-white hover:text-black border border-white-500 hover:border-transparent rounded-full transition-all flex items-center justify-center text-center')}>
							<svg className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
								<path d="M12 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 14.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.727 9.007l4.553 2.653M10.273 4.34 5.727 6.993" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<span className='ml-2 inline-block align-middle'>Share</span>
						</Button>
					</div>
				</ScrollAnimation>
			</div>
		</>
	);
};
export default SingleBlog;