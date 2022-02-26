import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import Logo from './images/logo.svg';
import style from './footer.module.scss';
import FadeInAnimation from '../../animation/fade';

const Footer: React.FC<any> = (props: any) => {
	const navigation = [
		{ name: 'Blogs', href: '/blog/', current: true },
		{ name: 'Case Studies', href: '#', current: false },
		{ name: 'Carrers', href: '#', current: false },
		{ name: 'Get in touch', href: '#', current: false },
		{ name: 'Partners', href: '#', current: false },
		{ name: 'Bug Bounty', href: '#', current: false },
		{ name: 'Feature Request', href: '#', current: false },
	]
	const navigation2 = [
		{ name: 'Privacy Policy for Merchants', href: '#', current: true },
		{ name: 'Terms of Service for Merchants', href: '#', current: false },
		{ name: 'Copyright Policy', href: '#', current: false },
		{ name: 'Data Processing Addendum', href: '#', current: false },
		{ name: 'Terms of Service for end users', href: '#', current: false },
		{ name: 'Privacy Policy for end users', href: '#', current: false },
	]
	return (
		<>
			<FadeInAnimation
				wrapperElement="div"
				className={cn(style['site-footer'], 'custom-container footer')}
			>
				<div className='w-full grid grid-cols-1 items-end sm:grid-cols-12 gap-x-6'>
					<div className='sm:col-span-4 lg:col-span-5'>
						<Link href="/" >
							<a className='inline-flex'>
								<Image
									src={Logo}
									alt="Techmonk"
								/>
							</a>
						</Link>
						<p className={cn(style.info, 'font-2 mb-4')}>
							We bring deep learning knowledge to the scope of marketing so that brands can optimize on their KPIs.
						</p>
					</div>
					<div className='sm:col-span-8 lg:col-span-7'>
						<p className={cn(style['meta-text'], 'uppercase font-medium')}>
							Navigation
						</p>
						<ul className={cn(style.menu, 'flex flex-wrap pb-10')}>
							{navigation.map((item) => (
								<li
									key={item.name}
									className={style['menu-item']}>
									<a
										key={item.name}
										href={item.href}
										className={cn(
											item.current ? 'font-bold' : '', 'inline-block',
											style['menu-link']
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
						<p className={cn(style['meta-text'], 'uppercase font-medium pt-4')}>
							Legal
						</p>
						<ul className={cn(style.menu, 'flex flex-wrap')}>
							{navigation2.map((item) => (
								<li
									key={item.name}
									className={style['menu-item']}>
									<a
										key={item.name}
										href={item.href}
										className={cn(
											item.current ? 'font-bold' : '', 'inline-block',
											style['menu-link']
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</FadeInAnimation>
		</>
	);
};
export default Footer;