const express = require('express')
const Practioner = require('../models/Practioner')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/practitioners', auth, async (req, res) => {
  try {
    const practioner = new Practioner(req.body)
    await practioner.save()
    res.status(201).send({ practioner })
  } catch (error) {
    res.status(400).send(error)
  }
})

router.put('/practitioners/:id', auth, async (req, res) => {
  try {
    const _id = req.params.id

    Practioner.findOneAndUpdate(
      { _id },
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.status(400).json(err)
        }
        res.json(contact)
      },
    )
  } catch (error) {}
})

router.get('/practitioners/:id', async (req, res) => {
  try {
    const _id = req.params.id

    Practioner.findOne({ _id }, (err, practioner) => {
      if (err) {
        res.status(400).json(err)
      }
      if (!practioner) {
        res.status(404).json({ message: 'Contact not found.' })
      }

      res.json(practioner)
    })
  } catch (error) {
    res.status(400).send(error)
  }
})

const options = {
  limit: 2,
}

router.get('/practitioners', async (req, res) => {
  try {

    Practioner.paginate({}, options, (error, result) => {
      const page = parseInt(req.query.page) || 0
      const totalPages = result.totalPages
      const limit = result.limit
      if(Math.ceil(totalPages/limit) < page) {
        res.json({data:[]})
      } else {
      Practioner.find({})
      .skip(page * limit) 
      .limit(limit)
      .exec((err, doc)=>{
        res.json({data:doc, nextPage:Math.ceil(totalPages/limit) > page ? page+1: null})
      })
      
    }
    })
  } catch (error) {
    res.status(400).send(error)
  }
})

router.delete('/practitioners/:id', auth, async (req, res) => {
  try {
    const _id = req.params.id
    Practioner.findOneAndRemove({ _id }, (err, practioner) => {
      if (err) {
        res.status(400).json(err)
      }
      if (!practioner) {
        res.status(404).json({ message: 'practioner not found.' })
      }
      res.json({ message: `practioner ${practioner.name} deleted.` })
    })
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router
