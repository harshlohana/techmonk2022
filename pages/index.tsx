import Banner from '../components/home/banner';
import Content from '../components/home/banner/content';
import Header from '../components/header';
import ParticlesWrapper from '../components/particles';
import CaseStudy from '../components/case-study';
import Footer from '../components/footer';
import OurProduct from '../components/our-product';
import Testimonials from '../components/testimonials';

const Home: React.FC<any> = (props: any) => {

  return (
    <>
      <ParticlesWrapper>
        <div className='relative z-10 text-white flex flex-col min-h-100vh justify-between'>
          <div className='custom-container'>
            <Header />
          </div>
          <div>
            <Banner />
          </div>
          <div>
            <Content />
          </div>
          <div>
            <OurProduct />
          </div>
          <div>
            <Testimonials />
          </div>
          <div>
            <CaseStudy />
          </div>
          <Footer />
        </div>
      </ParticlesWrapper>
    </>
  );
};
export default Home;