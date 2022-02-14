import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Case1 from './images/case-1.png';
import Case2 from './images/case-2.png';
import Case3 from './images/case-3.png';
import Arrow from './images/left-arrow.svg';
import style from './case.module.scss';

const CaseStudy: React.FC<any> = (props: any) => {
	const callouts = [
		{
			id: 1,
			description: 'increasing leads by 15% for rineBars landing page',
			imageSrc: Case1,
			imageAlt: 'increasing leads by 15% for rineBars landing page',
			href: '#',
		},
		{
			id: 2,
			description: 'increasing leads by 15% for rineBars landing page',
			imageSrc: Case2,
			imageAlt: 'increasing leads by 15% for rineBars landing page.',
			href: '#',
		},
		{
			id: 3,
			description: 'increasing leads by 15% for rineBars landing page',
			imageSrc: Case3,
			imageAlt: 'increasing leads by 15% for rineBars landing page',
			href: '#',
		},
	]
	return (
		<>
			<div className={cn(style['case-study-section'], 'custom-container')}>
				<h3 className={cn(style.title, 'h1 sm:mb-20 mb-4 font-bold')}>Case Studies</h3>
				<div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
					{callouts.map((callout) => (
						<div key={callout.id} className={cn(style['block-box'], 'group relative')}>
							<div className={cn(style.box, 'relative w-full overflow-hidden group-hover:opacity-75')}>
								<Image
									src={callout.imageSrc}
									alt={callout.imageAlt}
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<h3 className="mt-6 text-sm font-medium h4 mb-4">
								<a href={callout.href}>
									<span className="absolute inset-0" />
									{callout.description}
								</a>
							</h3>
							<Link href="/home/">
								<a className={cn(style.link, 'inline-block')}>
									Read Now
									<svg className={style.arrow} id="img" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M3.75 9h10.5M9 14.25 14.25 9 9 3.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
								</a>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
export default CaseStudy;