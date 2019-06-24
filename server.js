const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
var fs = require('fs');
var _ = require('lodash');

var CronJob = require('cron').CronJob;


new CronJob('* * 0 12 * *', function () {
    axios.get(`http://data.fixer.io/api/latest?access_key=07790c96c5176bca818c9a78caac2f2f`)
    .then(res =>{
        console.log("res", res.data.rates)
        let arrayData = Object.entries(res.data.rates)
        let data = arrayData.map(price => { 
            return { currency: price[0], price: price[1] }
        })
        return fs.writeFile('prices.json', JSON.stringify(data), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    })
    .catch(err => { console.log(err)})

    
}, null, true, 'America/Los_Angeles');


var data = JSON.parse(fs.readFileSync('prices.json'))

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.use(express.static('public'));



app.get('/prices', (req,res) => {
    console.log("DATA", data)
    res.json(data)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


function convert(to,from) {
    return (to / from) * 1
}


