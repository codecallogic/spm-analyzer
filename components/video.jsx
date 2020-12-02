import React, {useState, useEffect, useRef} from 'react'

const Video = ({}) => {

  const [state, setState] = useState({
    videoWrap: false,
    videoSticky: true
  })

  const {videoWrap, videoSticky} = state

  const vidRef = useRef(null)

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom + 120 <= window.innerHeight;
  }

  const handleScroll = (e) => {
    const wrappedElement = document.getElementById('video-trigger');
    const stream = document.getElementById('stream');

    if(isBottom(wrappedElement) && !stream.paused){
      setState({...state, videoWrap: true});
    }else{
      setState({...state, videoWrap: false});
    }
  }

  const handleSticky = () => {
    console.log('heLLO')
    setState({...state, videoWrap: false, videoSticky: false});
    if(!vidRef.current.paused){
      vidRef.current.pause()
    }
  }
  
  return (
    <div className="video">
      <div className="video-title">What is SPM?</div>
      <div className="video-subheading">See the Video Below</div>
      <div className={videoWrap ? 'video-wrap' : ''} >
        <div className={`video-player ` + ( videoWrap ? 'sticky': '')}>
          <svg className={ videoWrap ? 'sticky-icon-show': 'sticky-icon-hide'} onClick={handleSticky} >
            <use xlinkHref="/media/sprite.svg#icon-cross"></use>
          </svg>
          <video ref={vidRef} id="stream" poster="/media/image-overlay.png" controls><source src="/media/video.mp4" type="video/mp4" frameBorder="0" gesture="media" allowFullScreen/></video>
        </div>
      </div>
      <div id="video-trigger"></div>
    </div>
  )
}

export default Video