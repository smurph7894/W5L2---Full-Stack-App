const Game = require("../models/game.model");

module.exports = {
    findAllGames: (req, res) =>{
        Game.find({})
            .then((allGames)=>{
                console.log(allGames);
                res.json(allGames);
            })
            .catch((err)=> {
                console.log("Find ALL Games failed.");
                res.json({message: "Something went wrong in findAll", error: err});
            });
    },

    createNewGame: (req, res) =>{
        Game.create(req.body)
            .then((newGame) =>{
                console.log(newGame);
                res.json(newGame);
            })
            .catch((err) =>{
                console.log("Something went wrong in createNewGame");
                //We set the response status of 400 to display our err, which is the rejection of our promise.
                //A 400 status means our client is talking to our server jus fine, but the client isn't sending good info.
                //This is how we will eventually display our validations from the server in React!

                //A 404 status error means you're not calling to the right place or your server is not set up properly.
                //On the flip-side, a status fo 200 means we are looking good!
                //Always include line below for anything that is a create or update.
                res.status(400).json(err);
            });
    },

    findOneGame: (req, res)=>{
        Game.findOne({_id: req.params.id})
            .then((oneGame)=>{
                console.log(oneGame);
                res.json(oneGame);
            })
            .catch((err)=>{
                res.json({message: "Something went wrong in findOneGame", error: err});
                console.log("findOneGame failed.");
            });
    },

    deleteGame: (req, res)=>{
        Game.deleteOne({_id: req.params.id})
            .then((deletedGame)=>{
                console.log(deletedGame);
                res.json(deletedGame);
            })
            .catch((err)=>{
                res.json({message: "Something went wrong in deleteOneGame", error: err});
                console.log("deleteOneGame failed.");
            });
    },

    updateGame: (req, res)=>{
        Game.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new:true, runValidators: true}
            )
            .then((updatedGame)=>{
                console.log(updatedGame);
                res.json(updatedGame);
            })
            .catch((err)=>{
                res.status(400).json(err);
                console.log("Something went wrong in updateGame");
            });
    }
};