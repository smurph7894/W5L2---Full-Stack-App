const mongoose = require("mongoose");


const dbName = "gamesDB";

//If a DB by this name does not exist before running the first time, then this will create it!
mongoose.connect(`mongodb://tower.local/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database called ${dbName}`);
    })
    .catch((err)=>{
        console.log(` You had a problem connecting to the database ${dbName}. Here is you error:`, err);
    });

