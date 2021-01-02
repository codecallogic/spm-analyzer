import axios from 'axios'
import {useState, useEffect} from 'react'
import Nav from '../components/nav'
import Data from '../services/backupData.json'

const Estimate = ({}) => {

  const [estimate, setEstimate] = useState({
    market: null,
    category: null,
    estimateReady: false,
    rank: 'Not a number',
    data: Data,
    calculation: 0
  })

  const {market, category, rank, data, estimateReady, calculation} = estimate

  const pickMarket = (e) => {
    console.log(e.target.getAttribute("value"))
    setEstimate({...estimate, market: e.target.getAttribute("value")})
  }

  const pickCategory = (e) => {
    console.log(e.target.getAttribute("value"))
    setEstimate({...estimate, estimateReady: true, category: e.target.getAttribute("value")})
  }

  const handleChange = (e) => {
    setEstimate({...estimate, rank: e.target.value})
  }
  
  const estimateSales = async (e) => {
    setEstimate({...estimate, calculation: '...'})
    try {
      const response = await axios.get(`https://il7kji6jcl.execute-api.us-east-2.amazonaws.com/dev/salesEstimator?market=${market}&category=${category}&rank=${rank}`)
      setEstimate({...estimate, calculation: response.data.estimationResult})
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      <Nav />
      { estimateReady == true && 
      <div className="analyzer-breadcrumb-container">
        <a href="/sales-estimate" className="analyzer-breadcrumb">Go back</a>
      </div>
      }
      <div className="analyzer">
        <div className="analyzer-container">
        { estimateReady == false &&
          <div>
          <div className="analyzer-heading">Choose a marketplace</div>
          <div className="analyzer-marketplace">
            {data && data.map( (m, i) => 
               <img key={i} className={`analyzer-marketplace-market ` + (market === m.market ? 'active-market' : '')} src={`/media/${m.market}.png`} alt={`${m.market}`} value={m.market} onClick={pickMarket}/>
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
                      <img key={i} className="analyzer-categories-category-image" src={`/media/${market}/${c.name}.png`} alt={`${c.name}`} value={c.name} onClick={pickCategory}/>
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
        }
        { estimateReady == true && 
        <div className="analyzer-estimate-container">
          <div className="analyzer-heading">{category}</div>
          <div className="analyzer-input-group">
            <img src="/media/tag.png" alt="Rank" className="analyzer-input-group-tag"/>
            <input type="text" name="rank" placeholder="Enter sales rank" onChange={handleChange}/>
          </div>
          { !isNaN(rank) == true && 
              <div className="analyzer-estimate">
                <div className="analyzer-subheading">Calculate sales per month</div>
                <div className="analyzer-estimate-calculation-container">
                  <div className="analyzer-estimate-calculation">{calculation}</div>
                </div>
                <div className="analyzer-estimate-button" onClick={estimateSales}>Calculate Sales</div>
              </div>
          }
        </div>
        }
        </div>
      {/* <button onClick={salesEstimate}>Testing</button> */}
    </div>
    </div>
  )
}

export default Estimate
