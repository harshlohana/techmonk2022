import cn from 'classnames';
import Image from 'next/image';
import ScrollAnimation from "../../../animation/scroll";
import ViewPortAnimation from "../../../animation/gsapvp";
import Techmonk from './images/techmonk.svg';
import Share from './images/share.svg';
import Cac from './images/cac.svg';
import Cpm from './images/cpm.svg';
import Roas from './images/roas.svg';
import Square from './images/square.svg';
import style from './banner.module.scss';

const Content: React.FC<any> = (props: any) => {
	return (
		<>
			<div className={style['content-section']}>
				<div className={cn(style['content-h'], 'section1 relative flex justify-between items-center flex-col text-center')}>
					<div>
						<ScrollAnimation
							wrapperElement="div"
							className={cn(style['display-in-mobile'], 'op-0')}
							toggleClass="fade"
							start='top 500px'
							end='+=100%'
							pin='.section1'
						>
							<div
								className={cn(style.circle, style.circle1, 'flex justify-center items-center')}
							>
								<span className={cn(style['circle-i'], 'flex')}>
									<Image
										src={Share}
										alt="Techmonk"
									/>
								</span>
							</div>
							<div
								className={cn(style.circle, style.circle2, 'flex justify-center items-center')}
							>
								<span className={cn(style['circle-i'], 'flex')}>
									<Image
										src={Cac}
										alt="Techmonk"
									/>
								</span>
							</div>
							<div
								className={cn(style.circle, style.circle3, 'flex justify-center items-center')}
							>
								<span className={cn(style['circle-i'], 'flex')}>
									<Image
										src={Cpm}
										alt="Techmonk"
									/>
								</span>
							</div>
							<div
								className={cn(style.square, 'flex justify-center items-center')}
							>
								<span className={cn(style['circle-i'], 'flex')}>
									<Image
										src={Square}
										alt="Techmonk"
									/>
								</span>
							</div>
							<div
								className={cn(style.circle, style.circle4, 'flex justify-center items-center')}
							>
								<span className={cn(style['circle-i'], 'flex')}>
									<Image
										src={Roas}
										alt="Techmonk"
									/>
								</span>
							</div>
						</ScrollAnimation>
						<ScrollAnimation
							wrapperElement="div"
							className={cn(style.content, 'op-0')}
							toggleClass="fade"
							start='top 500px'
							end='+=100%'
							pin='.section1'
						>
							<h2>
								<Image
									src={Techmonk}
									alt="Techmonk"
								/>
							</h2>
							<p className={cn(style.inst3, 'mb-4')}>
								We bring deep learning knowledge to the scope of marketing so that brands can optimize on their KPIs.
							</p>
						</ScrollAnimation>
					</div>
					<ScrollAnimation
						wrapperElement="div"
						toggleClass="fade"
						start='top 700px'
						end='+=100%'
						pin='.section2'
						className={cn(style['max-w-767'], 'section2 op-0 pt-10')}
					>
						<h3 className="font-bold">
							This isn&apos;t just any other tech company taking open source data models to bring generic solutions to your business in the name of
							“
							<span className={style['gradient-text']}>Revolutionary AI</span>
							”.
						</h3>
					</ScrollAnimation>
				</div>
				<ScrollAnimation
					wrapperElement="div"
					toggleClass="fade"
					start='top 700px'
					end='+=100%'
					pin='.section3'
					className={cn(style['max-w-636'], style['pt-300'], 'section3 op-0 pt-10 flex justify-between items-center text-center')}
				>
					<h3 className={style['bold-content']}>
						And most importantly we {' '}
						<span className={style['gradient-text']}>optimize</span>
						{' '}
						according to your business KPIs, Let it be
					</h3>
				</ScrollAnimation>
			</div>
			<div className={cn(style.section, 'scroller relative flex justify-center items-center text-center text-white')}>
				<ScrollAnimation
					toggleClass="fadein"
					start='top 700px'
					end='+=100%'
					pin='.section4'
					wrapperElement="div"
					className={cn(style['gradient-circle'], style['gradient-circle-2'], 'section4 op-0')}
				>
				</ScrollAnimation>
				<ViewPortAnimation
					wrapperElement="div"
					className={cn(style['big-title'], 'sectoin-text font-bold custom-container')}
					id="home-feature"
				>
					<span className="pl-20">Getting Better</span>
					{' '}
					<span className={cn(style['outline-text'], 'uppercase')}>Roas</span>
					{' '}
					<span className={cn(style['outline-text'], 'uppercase pl-10')}>Roi</span>
					{' '}
					<span className={cn(style['outline-text'], 'uppercase pl-10')}>CPM</span>
				</ViewPortAnimation>
			</div>
		</>
	);
};
export default Content;
