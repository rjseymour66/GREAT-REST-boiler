import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', () => {
  console.log('Database is connected');
})

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serving static files
app.use(express.static('public'))

routes(app);

app.get('/', (req, res) => {
  res.send(`EXPRESS!!!`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

