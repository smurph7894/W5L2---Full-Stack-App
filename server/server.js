const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

//this lets our front-end at port 3000 make calls to our back-end at port 8000
//taking it awat will result in "cors errors" when attempting your axios calls!
app.use(cors({
    origin: "http://localhost:3000"
}));

require("./config/mongoose.config");

require("./routes/game.routes")(app);

app.listen(8000, () => console.log("You are connected to port 8000"));

