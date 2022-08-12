const axios = require ("axios") 
const getCity = (req,res) => {
    const {city} = req.query 

    axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=45581a14f5f922a6a8737b737354e179')
    .then(weatherRes => {
    
      
        
    res.status(200).send(weatherRes.data)
    
    })
    
    .catch(err =>console.log(err))
    }

module.exports = { 
    getCity
}