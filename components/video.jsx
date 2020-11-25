import React, {useState, useEffect} from 'react'

const Video = ({}) => {

  const [state, setState] = useState({
    videoWrap: false,
    videoClose: false
  })

  const {videoWrap, videoClose} = state

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom + 120 <= window.innerHeight;
  }

  const handleScroll = (e) => {
    const wrappedElement = document.getElementById('video-trigger');
    if(isBottom(wrappedElement) && !videoClose){
      setState({...state, videoWrap: true});
    }else{
      setState({...state, videoWrap: false});
    }
  }
  
  return (
    <div className="video">
      <div className="video-title">What is SPM?</div>
      <div className="video-subheading">See the Video Below</div>
      <div className={videoWrap ? 'video-wrap' : ''}>
        <div className={`video-player ` + ( videoWrap ? 'sticky': '')}>
          {/* <iframe className={videoWrap ? 'sticky-video' : ''} src="/media/video.mp4" frameBorder="0" gesture="media" allowFullScreen></iframe> */}
          <video controls><source src="/media/video.mp4" type="video/mp4"/></video>
        </div>
      </div>
      <div id="video-trigger"></div>
    </div>
  )
}

export default Video