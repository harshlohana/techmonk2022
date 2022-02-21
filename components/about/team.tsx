import cn from 'classnames';
import Button from '../button';
import Image from 'next/image';
import Team1 from './images/1.png';
import Team2 from './images/2.png';
import Team3 from './images/3.png';
import style from './about.module.scss';
import ScrollAnimation from "../../animation/scroll";

const Team: React.FC<any> = (props: any) => {
	const teams = [
		{
			id: 1,
			name: 'Poojan Ajani',
			href: '#',
			imageSrc: Team3,
			post: 'Co-Founder Digimaze',
		},
		{
			id: 2,
			name: 'Poojan Ajani',
			href: '#',
			imageSrc: Team2,
			post: 'Co-Founder Digimaze',
		},
		{
			id: 3,
			name: 'Poojan Ajani',
			href: '#',
			imageSrc: Team1,
			post: 'Co-Founder Digimaze',
		},
	]
	return (
		<>
			<div className='py-10'>
				<div className='custom-container'>
					<div className='flex flex-wrap justify-between items-end'>
						<ScrollAnimation
							wrapperElement="h2"
							toggleClass="fade"
							start='top 700px'
							end='+=100%'
							pin='.section1'
							className={cn(style.title, 'op-0 section1 mb-0')}
						>
							We are team of experts from Marketing to Tech.
						</ScrollAnimation>
						<ScrollAnimation
							wrapperElement="div"
							toggleClass="fade"
							start='top 700px'
							end='+=100%'
							pin='.section2'
							className="op-0 section2"
						>
							<Button className='bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded-full transition-all'>
								Join Our Team
							</Button>
						</ScrollAnimation>
					</div>
					<div className='flex flex-wrap py-10'>
						{teams.map((team) => (
							<ScrollAnimation
								wrapperElement="div"
								toggleClass="fade"
								start='top 700px'
								end='+=100%'
								pin='.section3'
								key={team.id}
								className="op-0 section3 group relative w-full sm:w-1/3  px-2 py-4"
							>
								<div className={cn(style['team-box'], 'relative w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75')}>
									<Image
										src={team.imageSrc}
										alt={team.name}
										className='w-full h-full object-center object-cover lg:w-full lg:h-full'
									/>
								</div>
								<div className='mt-4 flex justify-between'>
									<div className='mt-4'>
										<h3 className={cn(style.name, 'font-normal')}>
											<a href={team.href}>
												<span aria-hidden="true" className="absolute inset-0" />
												{team.name}
											</a>
										</h3>
										<p className={cn(style.post, 'mt-2')}>{team.post}</p>
									</div>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Team;