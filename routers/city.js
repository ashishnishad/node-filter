const express = require('express')
const router = express.Router();
const City = require('../models/city')


router.get('/filter', async (req,res)=>{
    const keywords = req.query.keywords;
    const data = await City.find({
        city: { $regex: `^${keywords}`, $options: 'i'}
    })
    res.status(200).send(data)
})

router.post('/filter', async (req,res)=>{
    const data = new City(req.body)
    await data.save()
    res.send(data)
})



module.exports = router;