
const Questions = ({}) => {
  
  return (
    <div className="questions">
      <div className="questions-title">FAQ</div>
      <div className="questions-subheading">Frequently Asked Questions</div>
      <div className="questions-list">
        <div className="questions-list-item">
          <div className="questions-list-title">How can I find the products sales rank? </div>
          <div className="questions-list-content" style={{marginLeft: '1.5rem'}}><ol>
            <li>Search any product on Amazon</li>
            <li>Scroll down to about the middle of the product page</li>
            <li>Find the area that shows best seller rank and it’s primary category</li>
            <li>Enter that number in the appropriate category of the SPM Analyzer App</li>
            <li>(See instructions in app for more details under the ? icon on the top left corner)</li>
          </ol>
          </div>
        </div>
        <div className="questions-list-item">
          <div className="questions-list-title">Do I need to connect my Amazon Seller account to the app?</div>
          <div className="questions-list-content">We make it a simple process to estimate product sales. Users do not need to connect their Amazon account to SPM Analyzer.</div>
        </div>
        <div className="questions-list-item">
          <div className="questions-list-title">Is it available for iPad?</div>
          <div className="questions-list-content">It sure is, available for all iOS and Android devices. </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
