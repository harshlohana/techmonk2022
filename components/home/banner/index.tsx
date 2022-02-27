import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from './images/arrow.svg';
import Share from './images/share.svg';
import Cac from './images/cac.svg';
import Cpm from './images/cpm.svg';
import Roas from './images/roas.svg';
import Square from './images/square.svg';
import style from './banner.module.scss';
import FadeInAnimation from "../../../animation/fade";
import TimelineAnimation from "../../../animation/timeline";
//import SmoothScroll from "../../../animation/smoothscroll";
import Button from '../../button';


const Banner: React.FC<any> = (props: any) => {
	const {
		...restProps
	} = props;
	return (
		<div {...restProps} className={cn(style['banner-section'], 'flex justify-center items-center')}>
			<div className='relative custom-container'>
				<div>
					<div className={cn(style.ellipse, style.ellipse1)}></div>
					<div className={cn(style.ellipse, style.ellipse2)}></div>
					<div className={cn(style.ellipse, style.ellipse3)}></div>
					<div className={cn(style.ellipse, style.ellipse4)}></div>
				</div>
				<FadeInAnimation
					wrapperElement="div"
					className={cn(style['gradient-circle'])}
					distance={50}
					delay={.25}
				>
				</FadeInAnimation>
				<div className={cn(style['banner-content'], 'flex justify-center items-center text-white text-center flex-col')}>
					<FadeInAnimation
						wrapperElement="h1"
						direction="up"
						delay={.5}
						className='mb-4 font-light text-left sm:text-center'
						distance={50}
					>
						“These Marketing problems are
						{' '}
						<span className='font-bold'>unsolvable</span>”
					</FadeInAnimation>
					<FadeInAnimation
						wrapperElement="p"
						direction="up"
						delay={.75}
						distance={50}
						className={cn(style.inst, 'font-2 sm:pb-0 pb-10 text-left sm:text-center')}
					>
						- Some marketing guy who doesn&apos;t understand the true potential of Deep Learning.
					</FadeInAnimation>
					<FadeInAnimation
						wrapperElement="div"
						direction="down"
						className={style['bottom-pos']}
						delay={1.25}
						distance={50}
					>
						<p className={cn(style.inst2, 'font-2')}>True power of deep learning is intangible, especially when we combine it with marketing solutions.</p>
						<Link href='#product-section'>
							<a className="inline-block animate-bounce smooth-arrow">
								<Image
									src={Arrow}
									alt="Techmonk"
								/>
							</a>
						</Link>
					</FadeInAnimation>
				</div>
			</div>
			<TimelineAnimation
				wrapperElement="div"
				delay={1}
				className={cn(style['vector-line'], 'header-scroll')}
				toggleClass={style.animation}
			>
				<FadeInAnimation
					wrapperElement="div"
					delay={.5}
				>
					<svg fill="none" viewBox="0 0 1440 210"><path d="M0 77.195c10.734 14.033 19.76 29.37 30.99 43.015 13.295 16.157 29.828 31.897 46.62 44.377 35.931 26.7 79.387 38.864 123.346 43.423 39.946 4.142 74.9-5.049 111.126-21.303 18.411-8.262 34.869-19.785 52.287-29.811 19.492-11.221 38.384-23.128 57.064-35.665 30.25-20.301 60.419-43.584 96.792-51.386 24.362-5.226 59.141-9.3 81.092 4.628 25.925 16.45 50.323 34.11 77.884 48.12 44.192 22.463 89.546 43.13 136.86 58.124 34.761 11.016 71.385 19.194 107.987 18.989 29.213-.163 55.861-10.648 80.542-25.795 12.64-7.754 21.5-17.154 31.27-28.109 14.77-16.569 30.15-32.289 44.5-49.277 16.86-19.953 33.58-40.413 52.83-58.125 14.53-13.36 31.18-30.525 51.2-35.12 27.89-6.401 56.48 1.527 81.71 13.205 10.3 4.77 20.13 10.305 30.23 15.45 9.11 4.638 16.77 12.495 25.19 18.308 21.29 14.697 41.82 28.565 64.78 40.7 18.33 9.691 37.14 18.656 55.7 27.906" stroke="#fff" strokeLinecap="round" /></svg>
				</FadeInAnimation>

				<div
					className={cn(style.circle, style.circle1, style['circle-animation'], 'flex justify-center items-center')}
				>
					<span className={cn(style['circle-i'], 'flex')}>
						<Image
							src={Share}
							alt="Techmonk"
						/>
					</span>
				</div>
				<div
					className={cn(style.circle, style.circle2, style['circle-animation2'], 'flex justify-center items-center')}
				>
					<span className={cn(style['circle-i'], 'flex')}>
						<Image
							src={Cac}
							alt="Techmonk"
						/>
					</span>
				</div>
				<div
					className={cn(style.circle, style.circle3, style['circle-animation3'], 'flex justify-center items-center')}
				>
					<span className={cn(style['circle-i'], 'flex')}>
						<Image
							src={Cpm}
							alt="Techmonk"
						/>
					</span>
				</div>
				<div
					className={cn(style.square, style['square-animation4'], 'flex justify-center items-center')}
				>
					<span className={cn(style['circle-i'], 'flex')}>
						<Image
							src={Square}
							alt="Techmonk"
						/>
					</span>
				</div>
				<div
					className={cn(style.circle, style.circle4, style['circle-animation4'], 'flex justify-center items-center')}
				>
					<span className={cn(style['circle-i'], 'flex')}>
						<Image
							src={Roas}
							alt="Techmonk"
						/>
					</span>
				</div>
			</TimelineAnimation>
		</div >
	);
};
export default Banner;