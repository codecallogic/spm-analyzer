import axios from 'axios'
import {useState, useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import Nav from '../components/nav'
import Data from '../services/backupData.json'

const Estimate = ({}) => {

  const router = useRouter()

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
    setEstimate({...estimate, market: e.target.getAttribute("value")})
    router.push('/sales-estimate/#categories')
  }

  const pickCategory = (e) => {
    setEstimate({...estimate, estimateReady: true, category: e.currentTarget.id})
  }

  const handleChange = async (e) => {
    let code = e.keyCode || e.which
    if(code === 13){
      try {
        const response = await axios.get(`https://il7kji6jcl.execute-api.us-east-2.amazonaws.com/dev/salesEstimator?market=${market}&category=${category}&rank=${rank}`)
        setEstimate({...estimate, calculation: response.data.estimationResult})
      } catch (error) {
        console.log(error)
      }
    }
  }

  const resetRank = (e) => {
    setEstimate({...estimate, rank: e.target.value, calculation: 0})
  }
  
  const estimateSales = async (e) => {
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
            <div className="analyzer-heading" id="categories">Pick a category</div>
            <div className="analyzer-categories">
              {data && data.map( (m, i) =>
                <div key={i} className="analyzer-categories-container">
                { m.market == market && 
                  m.categories.map( (c, i) => 
                  <div key={i} id={c.name} className="analyzer-categories-container-box" onClick={pickCategory}> 
                    <div className="analyzer-categories-category">
                      <img className="analyzer-categories-category-image" src={`/media/${market}/${c.name}.png`} alt={`${c.name}`}/>
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
            <input type="text" autoFocus name="rank" placeholder="Enter sales rank (Enter)" onKeyPress={handleChange} onChange={resetRank}/>
          </div>
          { !isNaN(rank) == true && 
              <div className="analyzer-estimate">
                <div className="analyzer-estimate-button" onClick={estimateSales}>Calculate Sales</div>
                <div className="analyzer-subheading">Calculate sales per month</div>
                <div className="analyzer-estimate-calculation-container">
                  <div className="analyzer-estimate-calculation">{calculation}</div>
                </div>
              </div>
          }
        </div>
        }
        </div>
    </div>
    </div>
  )
}

export default Estimate
