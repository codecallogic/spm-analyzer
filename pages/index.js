import Head from 'next/head'
import Header from '../components/header'
import Video from '../components/video'
import Features from '../components/features'

const Home = ({}) => {
  
  return (
    <div className='home'>
      <Header />
      <Video />
      <Features />
    </div>
  )
}

export default Home
