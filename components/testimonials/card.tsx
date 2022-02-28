import cn from 'classnames';
import Image from 'next/image';
import ScrollAnimation from "../../animation/scroll";
import style from './testimonials.module.scss';

const Card: React.FC<any> = ({
	desc,
	img,
	title,
	post,
}: any) => {

	return (
		<>
			<ScrollAnimation
				wrapperElement="div"
				toggleClass="fade"
				start='top 700px'
				end='+=100%'
				pin='.section10'
				className={cn(style.card, 'section10 op-0 text-black flex justify-between flex-col')}
			>
				<p className={style.desc}>
					{desc}
				</p>
				<div className="flex items-center mt-4">
					<div className={cn(style.circle, 'flex-shrink-0')}>
						<Image
							src={img}
							alt={title}
							className={cn(style.circle, 'rounded-full')}
						/>
					</div>
					<div className="ml-4">
						<div className={cn(style.name, 'font-bold capitalize')}>{title}</div>
						<div className={cn(style.post, 'capitalize')}>{post}</div>
					</div>
				</div>
			</ScrollAnimation>
		</>
	);
};
export default Card;