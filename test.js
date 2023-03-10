fetch('http://localhost:3000/paradigmes')
.then(function (res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function (value){
  console.log(value[0]);
})


// const parkings = require('./parkings.json')

// app.get('/parkings/:id', (req,res) => {    
//   const id = parseInt(req.params.id)    
//   const parking = parkings.find(parking => parking.id === id)   
//   res.status(200).json(parking)})
