import {useState} from 'react'

const Steps = ({}) => {

  const [state, setState] = useState({
    step: 'one'
  })
  
  const {step} = state

  const changeImage = (e) => {
    setState({...state, step: e})
  }
  
  return (
    <div className="steps-container">
    <div className="steps">
      <div className="steps-list-container">
        <div className="steps-list">
          <div className="steps-list-item" onMouseOver={ () => changeImage('one')}>
            <div className="steps-list-item-step">
              <div className="steps-list-item-step-number">1</div>
            </div>
            <div className="steps-list-item-content">
              <div className="steps-list-item-content-heading">Create an Account</div>
              <div className="steps-list-item-content-text">Add your email and password to start.</div>
            </div>
          </div>
          <div className="steps-list-item" onMouseOver={ () => changeImage('two')}>
            <div className="steps-list-item-step">
              <div className="steps-list-item-step-number">2</div>
            </div>
            <div className="steps-list-item-content">
              <div className="steps-list-item-content-heading">Choose the C&M</div>
              <div className="steps-list-item-content-text">Choose the appropriate marketplace for your product and category</div>
            </div>
          </div>
          <div className="steps-list-item" onMouseOver={ () => changeImage('three')}>
            <div className="steps-list-item-step">
              <div className="steps-list-item-step-number">3</div>
            </div>
            <div className="steps-list-item-content">
              <div className="steps-list-item-content-heading">Calculate sales.</div>
              <div className="steps-list-item-content-text">Type in the products current sales rank and click calculate sales to get the results!</div>
            </div>
          </div>
        </div>
      </div>
      <img src={`/media/step-` +  (step ? step : null) + `.png`} alt="" className="steps-image"/>
    </div>
    </div>
  )
}

export default Steps
