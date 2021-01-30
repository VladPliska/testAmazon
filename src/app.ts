import express from 'express';

const app = express();
const router = express.Router();

const port = 3000


router.get('/', (req, res, next) => { 
  res.send('server listen')
})

app.listen(port, () => { 
  console.log('Server is ranning is port 3000')
})

