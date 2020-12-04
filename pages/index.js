import Head from 'next/head'
import Header from '../components/header'
import Video from '../components/video'
import Features from '../components/features'
import Discover from '../components/discover'
import App from '../components/app'
import Launch from '../components/launch'
import Steps from '../components/steps'
import Reviews from '../components/reviews'
import Gallery from '../components/gallery'
import Questions from '../components/questions'
import Download from '../components/download'
import Contact from '../components/contact'

const Home = ({}) => {
  
  return (
    <div className='home'>
      <Header />
      <Video />
      <Features />
      <Discover />
      <App />
      <Launch />
      <Steps />
      <Reviews />
      <Gallery />
      <Questions />
      <Download />
      <Contact />
      <div className="copyright">
        <div className="copyright-reserved">&copy; 2019 | All Rights Reserved</div>
        <div className="copyright-appd">APPD | AP Prime Deliveries LLC</div>
        <div className="copyright-links">
          <a href="" className="copyright-links-link">Terms & Conditions</a>
          <a href="" className="copyright-links-link">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Home
