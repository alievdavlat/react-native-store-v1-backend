const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRouter = require('./routes/products');
const app = express();
dotenv.config();
const port = process.env.PORT || 8000

const connectDB = async () => {
  try {
       await mongoose.connect(process.env.DB_URL).then( async(data) => {
        console.log(`Database connected on ${data.connection.host}`)
       })
  } catch (err) {
    console.log(err.message);
    setTimeout(connectDB, 5000)
  }
}
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb', extended: true}));
// router
app.get('/', (req, res) => {
console.log('api working');
});


app.use('/api/products', productRouter)

app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})