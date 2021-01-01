import axios from 'axios'
import {useState, useEffect} from 'react'
import Nav from '../components/nav'
import Data from '../services/backupData.json'

const Estimate = ({}) => {

  const [estimate, setEstimate] = useState({
    market: null,
    category: 'Appliances',
    rank: 1,
    data: Data
  })

  const {market, category, rank, data} = estimate

  const pickMarket = (e) => {
    console.log(e.target.getAttribute("value"))
    setEstimate({...estimate, market: e.target.getAttribute("value")})
  }
  
  const estimateSales = async (e) => {
    console.log(e.target.getAttribute("value"))
    // try {
    //   const response = await axios.get(`https://il7kji6jcl.execute-api.us-east-2.amazonaws.com/dev/salesEstimator?market=${market}&category=${category}&rank=${rank}`)
    //   console.log(response)
    // } catch (error) {
    //   console.log(error)
    // }
  }
  
  return (
    <div>
      <Nav />
      <div className="analyzer">
        <div className="analyzer-container">
          <div className="analyzer-heading">Choose a marketplace</div>
          <div className="analyzer-marketplace">
            {data && data.map( (m, i) => 
               <img key={i} className="analyzer-marketplace-market" src={`/media/${m.market}.png`} alt={`${m.market}`} value={m.market} onClick={pickMarket}/>
            )}
          </div>
          {market !== null &&
          <div>
            <div className="analyzer-heading">Pick a category</div>
            <div className="analyzer-categories">
              {data && data.map( (m, i) =>
                <div key={i} className="analyzer-categories-container">
                { m.market == market && 
                  m.categories.map( (c, i) => 
                  <div className="analyzer-categories-container-box"> 
                    <div className="analyzer-categories-category">
                      <img key={i} className="analyzer-categories-category-image" src={`/media/${market}/${c.name}.png`} alt={`${c.name}`} value={c.name}/>
                    </div>
                    <span>{c.name}</span>
                  </div>
                )
                }
                </div>
              )}
            </div>
          </div>
          }
        </div>
      {/* <button onClick={salesEstimate}>Testing</button> */}
    </div>
    </div>
  )
}

export default Estimate
