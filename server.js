const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const axios = require('axios')

const app = express()

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

const port = 3001

app.use('/api/sales', async (req, res) => {
  const {market, category, rank} = req.body

  try {
    const response = await axios.get(`https://il7kji6jcl.execute-api.us-east-2.amazonaws.com/dev/salesEstimator?market=${encodeURIComponent(market)}&category=${encodeURIComponent(category)}&rank=${encodeURIComponent(rank)}`)
    console.log(response)
    return res.json(response.data)
  } catch (error) {
    console.log(error)
    if(error){
      return res.json('Error getting sales estimation')
    }
  }
})

app.listen(port, () => console.log(`Server is running on port ${port}`))