import Head from 'next/head'
import Header from '../components/header'
import Video from '../components/video'
import Features from '../components/features'
import Discover from '../components/discover'

const Home = ({}) => {
  
  return (
    <div className='home'>
      <Header />
      <Video />
      <Features />
      <Discover />
    </div>
  )
}

export default Home
