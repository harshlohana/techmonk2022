import cn from 'classnames';
import Button from '../button';
import style from './about.module.scss';
import FadeInAnimation from '../../animation/fade';

const AboutTop: React.FC<any> = (props: any) => {
	return (
		<>
			<div className="py-10 relative">
				<div className='custom-container'>
					<div className='flex flex-wrap items-center py-10'>
						<div className='w-full sm:w-1/2 sm:pr-4'>
							<FadeInAnimation
								wrapperElement="h2"
								direction="up"
								distance={50}
								className={cn(style.title, 'mb-4')}
							>
								We are a team of tech &amp; marketing enthusiast
							</FadeInAnimation>
							<FadeInAnimation
								wrapperElement="p"
								direction="up"
								distance={50}
								delay={.25}
								className={cn(style.desc, 'font-2 mb-10')}
							>
								a mix of youthful exuberance and wisdom gained with experience who are passionate about solving traditional marketing problems with new age marketing thinking and deep learning technologies.
							</FadeInAnimation>
							<FadeInAnimation
								wrapperElement="div"
								direction="up"
								distance={50}
								delay={.5}
							>
								<Button className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded-full transition-all">
									Join Our Team
								</Button>
							</FadeInAnimation>
							<FadeInAnimation
								wrapperElement="div"
								direction="left"
								distance={50}
								delay={.5}
								className={style.line}
							></FadeInAnimation>
						</div>
						<div className='w-full sm:w-1/2 relative'>
							<FadeInAnimation
								wrapperElement="div"
								direction="left"
								distance={50}
								delay={.5}
								className={style.line2}
							></FadeInAnimation>
							<div className='text-center'>
								<FadeInAnimation
									wrapperElement="div"
									direction="down"
									distance={50}
									delay={.5}
									className={style.star}
								></FadeInAnimation>
								<FadeInAnimation
									wrapperElement="div"
									direction="right"
									distance={50}
									delay={.5}
									className={style.circle}
								></FadeInAnimation>
								<FadeInAnimation
									wrapperElement="div"
									direction="up"
									distance={50}
									delay={.5}
									className={style.polygon}
								></FadeInAnimation>
							</div>
						</div>
					</div>
					<div className={cn(style.content, 'font-2')}>
						<FadeInAnimation
							wrapperElement="div"
							direction="left"
							distance={50}
							delay={.5}
							className={style.vector}
						></FadeInAnimation>
						<FadeInAnimation
							wrapperElement="p"
							direction="up"
							distance={50}
							delay={.5}
							className='font-2'
						>
							Our endeavour is to focus on building new innovative custom model architectures that are created as well built to solve marketing specific problems. We believe that as deep learning models get more sophisticated and cost to run/train specific customer models suited for a specific problem statement and dataset will be more cost effective and at the same time customer models will be easier and faster to achieve human level or super human accuracies.
						</FadeInAnimation>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutTop;