/*const Clarifai = require('clarifai');


//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
    apiKey: 'e71fd6715d2943869406e6001fe6583d'
  });



 const handleApiCall =  (req , res) =>{
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data =>{
      res.json(data);
  })
  .catch(err => res.status(400).json('Unable to work with API'))
 }


const handleImage= (req, res,db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
  }

module.exports ={
 handleImage,
 handleApiCall
}*/



const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: 'e71fd6715d2943869406e6001fe6583d'
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}