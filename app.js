const express = require('express')
const axios = require('axios').default;

const app = express()
const port = 3000

app.get('/', (req, res) => {
  
})

app.get('/syncbbhub', (req, res) => {
axios.get('https://bigenapps.bigenafrica.com/bbhubsync/windowsschedule/powershellran')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})