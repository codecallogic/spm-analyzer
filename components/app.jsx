import {useState} from 'react'

const MoreFeatures = ({}) => {

  const [state, setState] = useState({
    show: 'communication'
  })

  const {show} = state

  const itemClicked = (e) => {
    setState({...state, show: e.target.textContent.toLowerCase()})
  }
  
  return (
    <div className="app-container">
      <div className="app">
        <div className="app-title">Features</div>
        <div className="app-subheading"></div>
        {/* <div className="app-menu">
          <div className={`app-menu-item ` + (show === 'communication' ? 'active-2': '')} onClick={itemClicked}>Communication</div>
          <div className={`app-menu-item ` + (show === 'scheduling' ? 'active-2': '')} onClick={itemClicked}>Scheduling</div>
          <div className={`app-menu-item ` + (show === 'messages' ? 'active-2': '')} onClick={itemClicked}>Messages</div>
          <div className={`app-menu-item ` + (show === 'live chat' ? 'active-2': '')} onClick={itemClicked}>Live Chat</div>
        </div> */}
        <div className={`app-content ` + (show === 'communication' ? 'show' : '')}>
          <div className="app-content-container">
          <div>
            <img className="app-content-image" src="/media/spm-pro.png" alt="Tab Image"/> 
          </div>
          <div>
            <div className="app-content-title">SPM Analyzer Pro</div>
            <div className="app-content-title-2">Get even more features with SPM Analyzer Pro</div>
            <div className="app-content-subheading"></div>
            <div className="app-content-description">
              No more ads forever with unlimited searching, faster estimating with category sort options, new trending tab, and much more.
            </div>
          </div>
          </div>
        </div>
        <div className={`app-content ` + (show === 'scheduling' ? 'show' : '')}>
          <div className="app-content-container">
          <div>
            <div className="app-content-title">Scheduling when you want</div>
            <div className="app-content-subheading">Uniquely underwhelm premium outsourcing with proactive leadership</div>
            <div className="app-content-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, voluptatibus illo quos commodi minus laboriosam eligendi veniam cumque similique quaerat, omnis vero inventore dignissimos nihil rerum consectetur corporis accusamus sit.
              Est harum repellat rerum illo ullam veritatis totam maxime quisquam magnam reprehenderit, nobis ducimus praesentium temporibus porro provident a laborum. Dolore necessitatibus et atque assumenda excepturi, tempora magnam perspiciatis optio.
              Itaque quo ipsam ad? Sit, labore vitae soluta ratione suscipit eius fuga nulla tempora. Nulla beatae consequuntur aliquid, dolor quidem quas autem reprehenderit aperiam enim architecto nam, nobis non nihil!
            </div>
          </div>
          <div>
            <img className="app-content-image" src="/media/spm-pro.png" alt="Tab Image"/> 
          </div>
          </div>
        </div>
        <div className={`app-content ` + (show === 'messages' ? 'show' : '')}>
          <div className="app-content-container">
          <div>
            <img className="app-content-image" src="/media/spm-pro.png" alt="Tab Image"/> 
          </div>
          <div>
            <div className="app-content-title">Realtime Messaging Service</div>
            <div className="app-content-subheading">Uniquely underwhelm premium outsourcing with proactive leadership</div>
            <div className="app-content-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, voluptatibus illo quos commodi minus laboriosam eligendi veniam cumque similique quaerat, omnis vero inventore dignissimos nihil rerum consectetur corporis accusamus sit.
              Est harum repellat rerum illo ullam veritatis totam maxime quisquam magnam reprehenderit, nobis ducimus praesentium temporibus porro provident a laborum. Dolore necessitatibus et atque assumenda excepturi, tempora magnam perspiciatis optio.
              Itaque quo ipsam ad? Sit, labore vitae soluta ratione suscipit eius fuga nulla tempora. Nulla beatae consequuntur aliquid, dolor quidem quas autem reprehenderit aperiam enim architecto nam, nobis non nihil!
            </div>
          </div>
          </div>
        </div>
        <div className={`app-content ` + (show === 'live chat' ? 'show' : '')}>
          <div className="app-content-container">
          <div>
            <div className="app-content-title">Live chat when you needed</div>
            <div className="app-content-subheading">Uniquely underwhelm premium outsourcing with proactive leadership</div>
            <div className="app-content-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, voluptatibus illo quos commodi minus laboriosam eligendi veniam cumque similique quaerat, omnis vero inventore dignissimos nihil rerum consectetur corporis accusamus sit.
              Est harum repellat rerum illo ullam veritatis totam maxime quisquam magnam reprehenderit, nobis ducimus praesentium temporibus porro provident a laborum. Dolore necessitatibus et atque assumenda excepturi, tempora magnam perspiciatis optio.
              Itaque quo ipsam ad? Sit, labore vitae soluta ratione suscipit eius fuga nulla tempora. Nulla beatae consequuntur aliquid, dolor quidem quas autem reprehenderit aperiam enim architecto nam, nobis non nihil!
            </div>
          </div>
          <div>
            <img className="app-content-image" src="/media/spm-pro.png" alt="Tab Image"/> 
          </div>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default MoreFeatures
