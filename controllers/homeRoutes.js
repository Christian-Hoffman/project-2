const router = require('express').Router();
const {User, Character} = require("../models");

router.get('/', async(req, res) => {
  let monsterData = await Character.findAll()
  monsterData = JSON.parse(JSON.stringify(monsterData));
  const features = [];

  let randomFeature1 = Math.floor(Math.random()* monsterData.length);
  let randomFeature2 = Math.floor(Math.random()* monsterData.length);
  let randomFeature3 = Math.floor(Math.random()* monsterData.length);

  while(randomFeature1 == randomFeature2 || randomFeature1 == randomFeature3 || randomFeature2 == randomFeature3){
    randomFeature3 = Math.floor(Math.random()* monsterData.length);
    randomFeature2 = Math.floor(Math.random()* monsterData.length);
    randomFeature1 = Math.floor(Math.random()* monsterData.length);
  }
  features.push(monsterData[randomFeature1], monsterData[randomFeature2], monsterData[randomFeature3], );

  console.log(features);
  res.render('homepage', {isOnline: req.session.isOnline, features});
});

module.exports = router;
