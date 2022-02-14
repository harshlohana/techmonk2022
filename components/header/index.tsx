import Link from 'next/link';
import { useCallback, useState } from 'react';
import cn from 'classnames';
import Button from '../button';
import Image from 'next/image';
import Logo from './images/logo.svg';
import Menubar from './images/bar.svg';
import Close from './images/close.svg';
import style from './header.module.scss';

const Header: React.FC<any> = (props: any) => {
	const navigation = [
		{ name: 'Blog', href: '#', current: true },
		{ name: 'Team', href: '#', current: false },
		{ name: 'Case Studies', href: '#', current: false },
		{ name: 'Blogs', href: '#', current: false },
	]
	const [MenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = useCallback(
		() => {
			setMenuOpen(!MenuOpen);
		},
		[MenuOpen],
	);
	return (
		<>
			<div className={style['site-header']}>
				<div>
					<div className='flex justify-between items-center'>
						<Link href="/home/">
							<a className='inline-block'>
								<Image
									src={Logo}
									alt="Techmonk"
								/>
							</a>
						</Link>
						<div className={MenuOpen ? style.open : ''}>
							<ul className={cn(style.menu, 'flex')}>
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
							<Button
								className={cn('sm:hidden', style['menu-bar'])}
								onClick={toggleMenu}
							>
								<Image
									src={Menubar}
									alt="Techmonk"
								/>
							</Button>
							<Button
								onClick={toggleMenu}
								className={cn('sm:hidden fixed top-0 right-0 p-3 flex items-center', style['close-icon'])}>
								<Image
									src={Close}
									alt="Techmonk"
								/>
							</Button>
						</div>

					</div>
				</div>
			</div>
		</>
	);
};
export default Header;