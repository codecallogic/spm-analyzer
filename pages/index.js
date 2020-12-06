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
import Copyright from '../components/copyright'

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
      <Copyright />
    </div>
  )
}

export default Home
