const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
let PORT = 4000;

const app = new express();




app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/projects', function (req, res){
    async function main(){
        const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0-feliq.mongodb.net/dbUser?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            await client.connect(err => {
                const collection = client.db("test").collection("test");
                if (err) throw err;
                // db pointing to newdb
                console.log("Switched to "+db.databaseName+" database");
                let name = req.body.name;
                // let overview = req.body.overview;
                // let startDate = req.body.startDate;
                // let dueDate = req.body.startDate;
                // let price = req.body.price;
                // let thumbnail = req.body.thumbnail;
                // let url = req.body.url;
                client.collection('test').insertOne(name, function(err, res){
                    if (err) throw err;
                    console.log('Document inserted');
                    client.close();
                });
                
        });
    }finally {
        await client.close()        
    }
}
});


app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
})