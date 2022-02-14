import Banner from '../components/home/banner';
import Content from '../components/home/banner/content';
import Header from '../components/header';
import ParticlesWrapper from '../components/particles';
import CaseStudy from '../components/case-study';
import Footer from '../components/footer';

const Home: React.FC<any> = (props: any) => {
  return (
    <>
      <ParticlesWrapper>
        <div className='relative z-10 text-white'>
          <div className='custom-container'>
            <Header />
          </div>
          <Banner />
          <Content />
          <CaseStudy />
          <Footer />
        </div>
      </ParticlesWrapper>
    </>
  );
};
export default Home;