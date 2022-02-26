import cn from 'classnames';
import ScrollAnimation from "../../animation/scroll";
import style from './product.module.scss';

const OurProduct: React.FC<any> = (props: any) => {
	return (
		<>
			<div className={cn(style['product-section'], 'py-10')}>
				<div className='custom-container'>
					<div className='section5 lg:grid lg:grid-cols-2 lg:gap-x-6'>
						<div className={style.content}>
							<ScrollAnimation
								wrapperElement="h3"
								toggleClass="fade"
								start='top 400px'
								end='+=100%'
								pin='.section5'
								className={cn(style.title, 'op-0 mb-4')}
							>
								Our Products
							</ScrollAnimation>
							<ScrollAnimation
								wrapperElement="div"
								toggleClass="fade"
								start='top 400px'
								end='+=100%'
								pin='.section5'
								className="op-0"
							>
								<p className={cn(style.desc, 'font-2 mb-4')}>Our endeavour is to focus on building new innovative custom model architectures that are created as well built to solve marketing specific problems. We derive inspiration learning from the latest models like ViT-G/14, Transformer, Reformer, Text-To-Image GANS, BeRT, GPT-3 etc. </p>
								<p className={cn(style.desc, 'font-2 mb-4')}>
									We believe that as deep learning models get more sophisticated and cost to run/train specific customer models suited for a specific problem statement and dataset will be more cost effective and at the same time customer models will be easier and faster to achieve human level or superhuman accuracies
								</p>
							</ScrollAnimation>
						</div>

						<div className='lg:pl-10'>
							<div
								className={cn(style.content, 'lg:block sm:grid sm:grid-cols-2 gap-x-6')}
							>
								<ScrollAnimation
									wrapperElement="div"
									toggleClass="fade"
									start='top 400px'
									end='+=100%'
									pin='.section5'
									className={cn(style['bg-1'], 'op-0 w-full flex items-end')}
								>
									<div className={style['p-30']}>
										<p className={cn(style['card-title'], 'font-bold')}>
											Connect
										</p>
										<p className={cn(style.inst, 'mb-0')}>
											Collect beautiful reviews for your ecommerce store.
										</p>
									</div>
								</ScrollAnimation>
								<ScrollAnimation
									wrapperElement="div"
									toggleClass="fade"
									start='top 400px'
									end='+=100%'
									pin='.section5'
									className={cn(style['bg-2'], 'op-0 w-full flex items-end relative')}
								>
									<div className={cn(style['marquee-text'], 'text-center')} />
									<div className={style['p-30']}>
										<p className={style['small-inst']}>
											Coming Soon*
										</p>
										<p className={cn(style['card-title'], 'font-bold mb-0')}>
											Influencee
										</p>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default OurProduct;