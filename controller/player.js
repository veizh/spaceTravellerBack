const playerSchema = require("../models/player.js")

exports.pushOne=async (req,res)=>{
    let newPlayer = new playerSchema({...req.body})
    try {
        newPlayer
          .save()
          .then(() =>
            res.status(200).json({ msg: "Le joueur et son score ont bien été ajouté a la bdd !" })
          )
  
          .catch((err) =>
            res
              .status(400)
              .json({
                msg: "Ca n'a pas fonctionné",
                err,
              })
          );
      } catch (err) {
        return res.status(404).json({ err: err });
      }
}
exports.getAll=async(req,res)=>{
    let scores =await playerSchema.find();
    if(scores)return res.status(200).json({scores:scores})
        else{
    return res.status(400).json({msg:"il y'a eu une erreur lors de la récupérationd es données"})
}
}