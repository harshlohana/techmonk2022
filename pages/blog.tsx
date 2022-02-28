import Header from '../components/header';
import ParticlesWrapper from '../components/particles';
import Footer from '../components/footer';
import BlogList from '../components/blog';

const Blog: React.FC<any> = () => {
	return (
		<>
			<ParticlesWrapper>
				<div className='relative z-10 text-white flex flex-col min-h-100vh justify-between'>
					<div className='custom-container'>
						<Header />
						<BlogList />
					</div>
					<Footer />
				</div>
			</ParticlesWrapper>
		</>
	);
};
export default Blog;