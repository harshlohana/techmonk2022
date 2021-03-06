import Header from '../components/header';
import ParticlesWrapper from '../components/particles';
import Footer from '../components/footer';
import AboutTop from '../components/about';
import Team from '../components/about/team';

const About: React.FC<any> = (props: any) => {
	return (
		<>
			<ParticlesWrapper>
				<div className='relative z-10 text-white flex flex-col min-h-100vh justify-between'>
					<div className='custom-container'>
						<Header />
					</div>
					<AboutTop />
					<Team />
					<Footer />
				</div>
			</ParticlesWrapper>
		</>
	);
};
export default About;