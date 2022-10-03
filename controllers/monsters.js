const router = require("express").Router();
const { Character } = require("../models");

router.get("/", async (req, res) =>{
  try{
  const monsterData = await Character.findAll({

  });

  const monsters = JSON.parse(JSON.stringify(monsterData));

  console.log(monsters);

  res.render("monsters", {monsters})
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
})


module.exports = router;