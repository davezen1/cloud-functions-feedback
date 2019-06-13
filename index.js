const Firestore = require('@google-cloud/firestore')
const PROJECTID = 'lucid-universal-services'
const COLLECTION_NAME = 'feedbacks'
const firestore = new Firestore({
  projectId: PROJECTID
})

exports.feedback = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  // Perhaps add CORS with Authorization credentials
  // res.set('Access-Control-Allow-Origin', 'https://mydomain.com')
  // res.set('Access-Control-Allow-Credentials', 'true')

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).send('')
  } else if (req.method === 'POST') {
    // store/insert a new document
    const data = (req.body) || {}
    const appId = data.usappid
    const user = data.user || {}
    const feedback = data.feedback
    const created = new Date().getTime()
    return firestore.collection(COLLECTION_NAME)
      .add({ created, appId, feedback, user})
      .then(doc => {
        console.log(`Feedback Inserted ${JSON.stringify(doc)}`)
        return res.status(200).send(doc)
      }).catch(err => {
      console.error(err)
      return res.status(404).send({ error: 'unable to store' + appId + ' ' + feedback, err})
    })
  } else if (req.method === 'GET' ||
             req.method === 'PUT' || 
             req.method === 'DELETE') { 
    res.status(405).send('Method Not Implemented')
  }
}
