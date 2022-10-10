const express = require('express');

const app = express();
const fs = require('fs');
const convert = require('xml-js');
app.use(express.json())

fs.readFile('./flighdata_A 2.xml',(error, data)=>{
     jsonData = convert.xml2json(data, {compact:true, indentAttributes:true});
    console.log(jsonData)

})


app.get('/', function(req, res){
res.json(JSON.parse(jsonData))
})

app.listen(9000, function(){
    console.log('App running on 9000')
})

