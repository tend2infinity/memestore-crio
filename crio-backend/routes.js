const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const memedb = mongoose.model("memedb")

router.get('/memes', (req, res) => {
    memedb.estimatedDocumentCount()
    .then(count =>{
        if(count<=100) {
            memedb.find().sort({$natural:-1})
            .then(memes => {
                var newArray =[]
                memes.map((item) =>{
                    var newitem ={
                        "id": item._id,
                        "name": item.name,
                        "url": item.url,
                        "caption": item.caption
                    }
                    newArray.push(newitem)
                })
                res.json(newArray)
            }) 
            .catch(err => {
                console.log(err)
                return res.status(404)
            })
        }
        else {
             console.log("entered else block")
            memedb.find().skip(count-100)
            .then(memes => {
                var newArray =[]
                memes.map((item) =>{
                    var newitem ={
                        "id": item._id,
                        "name": item.name,
                        "url": item.url,
                        "caption": item.caption
                    }
                    newArray.push(newitem)
                })
                var rev = []
                rev = newArray
                res.json(rev.reverse())
            })
            .catch(err => {
                console.log(err)
                return res.status(404)
            })
        }
        
    })
    
       
        
})
router.get('/memes/:id', (req, res) => {
    console.log(req.params.id)
    memedb.find({ _id: req.params.id })
        .then(memes => {
            var newArray =[]
            memes.map((item) =>{
                var newitem ={
                    "id": item._id,
                    "name": item.name,
                    "url": item.url,
                    "caption": item.caption
                }
                newArray.push(newitem)
            })
            res.json(newArray[0])
        })
        .catch(err => {
            console.log(err)
            return res.status(404).json({ error: "No such id found" })
        })
})

router.post('/memes', (req, res) => {
    const { name, caption, url } = req.body
    if (!name || !caption || !url) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    memedb.find({name, caption, url})
    .then(meme => {
        console.log()
        if(meme.length !== 0){
            return res.status(409).json({error:"duplicate request"})
        }
        else{
            const meme = new memedb({
                name,
                caption,
                url
            })
            meme.save().then(result => {
                res.json({ id: result._id })
            })
                .catch(err => {
                    console.log(err)
                    return res.status(400)
                })
        }
    })
    .catch(error => {
        return res.status(400).json({error})
    })
    // console.log(req.user)
    
})

router.patch('/memes/:id', (req, res) => {
    const { caption, url } = req.body
    memedb.find({ _id: req.params.id })
        .then(memes => {
            if (memes) {
                if (caption && url) {
                    memedb.findByIdAndUpdate(req.params.id, {
                        caption,
                        url
                    }, {
                        new: true
                    })
                        .exec((err, result) => {
                            if (err) {
                                return res.status(400).json({ error: err })
                            } else {
                                return res.status(200).json({success: "details updated"})
                            }
                        })
                }
                else if (!caption && url) {
                    memedb.findByIdAndUpdate(req.params.id, {
                        url
                    }, {
                        new: true
                    })
                        .exec((err, result) => {
                            if (err) {
                                return res.status(400).res.json({ error: err })
                            } else {
                                return res.status(200).json({success: "details updated"})
                            }
                        })
                }
                else if (caption && !url) {
                    memedb.findByIdAndUpdate(req.params.id, {
                        caption
                    }, {
                        new: true
                    })
                        .exec((err, result) => {
                            if (err) {
                                return res.status(400).res.json({ error: err })
                            } else {
                                return res.status(200).json({success: "details updated"})
                            }
                        })
                }
                else {
                    return res.status(400).json({ error: "please add atleast one field" })
                }

            } 
          
        }) .catch(err => {
            return res.status(404).json({error:"no such id found"})
        })



})

module.exports = router  