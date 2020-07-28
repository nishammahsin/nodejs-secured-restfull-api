const express = require('express');
const Practioner = require('../models/Practioner');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/practitioners', auth, async (req, res) => {
  try {
    const practioner = new Practioner(req.body);
    await practioner.save();
    res.status(201).send({ practioner });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/practitioners/:id', auth, async (req, res) => {
  try {
    const _id = req.params.id;

    Practioner.findOneAndUpdate(
      { _id },
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.status(400).json(err);
        }
        res.json(contact);
      },
    );
  } catch (error) {}
});

router.get('/practitioners/:id', auth, async (req, res) => {
  try {
    const _id = req.params.id;

    Practioner.findOne({ _id }, (err, practioner) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!practioner) {
        res.status(404).json({ message: 'Contact not found.' });
      }

      res.json(practioner);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/practitioners', auth, async (_, res) => {
  try {
    Practioner.find({}, (err, practioners) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(practioners);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/practitioners/:id', auth, async (req, res) => {
  try {
    const _id = req.params.id;
    Practioner.findOneAndRemove({ _id }, (err, practioner) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!practioner) {
        res.status(404).json({ message: 'practioner not found.' });
      }
      res.json({ message: `practioner ${practioner.name} deleted.` });
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
