import cn from 'classnames';
import Card from './card';
import ScrollAnimation from "../../animation/scroll";
// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import User from './images/user.png'
import style from './testimonials.module.scss';

const Testimonials: React.FC<any> = (props: any) => {
	const content = [
		{
			id: 1,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in fermentum ante, quis sagittis elit. Integer tincidunt iaculis odio id mattis. Vestibulum finibus neque ut augue euismod pellentesque.',
			imageSrc: User,
			title: 'Jake Peralta',
			post: 'Managing Director, RBL Bank',
		},
		{
			id: 2,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in fermentum ante, quis sagittis elit. Integer tincidunt iaculis odio id mattis. Vestibulum finibus neque ut augue euismod pellentesque.',
			imageSrc: User,
			title: 'Jake Peralta',
			post: 'Managing Director, RBL Bank',
		},
		{
			id: 3,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in fermentum ante, quis sagittis elit. Integer tincidunt iaculis odio id mattis. Vestibulum finibus neque ut augue euismod pellentesque.',
			imageSrc: User,
			title: 'Jake Peralta',
			post: 'Managing Director, RBL Bank',
		},
	]
	return (
		<>
			<div className={cn(style['testimonials-section'], 'py-10')}>
				<div className='custom-container'>
					<ScrollAnimation
						wrapperElement="h3"
						toggleClass="fade"
						start='top 400px'
						end='+=100%'
						pin='.section9'
						className="section9 op-0 h1 sm:mb-20 mb-4 font-bold"
					>
						Testimonials
					</ScrollAnimation>
					<div className='custom-slider'>
						<Swiper
							spaceBetween={20}
							slidesPerView={2}
							modules={[Navigation]}
							navigation
							speed={1000}
							loop
							breakpoints={{
								320: {
									slidesPerView: 1,
									centeredSlides: false,
								},
								640: {
									slidesPerView: 1.5,
									centeredSlides: true,
								},
								1024: {
									slidesPerView: 2,
									centeredSlides: false,
								}
							}}

						>
							{content.map((item) => (
								<SwiperSlide key={item.id} className={style['slide-box']}>
									<Card
										desc={item.description}
										img={item.imageSrc}
										title={item.title}
										post={item.post}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};
export default Testimonials;