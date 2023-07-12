const express = require('express');
const routes = require('./routes');
const cors = require("cors");
// import sequelize connection
const sequelize = require('./config/connection')
const cookieParser= require('cookie-parser')
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
 

// const  corsOptions = {
//   origin: "http://localhost:3001"
// };

app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:true}).then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port !`);
  });
  
})
