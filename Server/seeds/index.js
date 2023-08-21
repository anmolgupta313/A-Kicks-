const seedBrands= require("./brands-seeds");

const seedProducts= require('./products-seeds');

const seedCart= require('./cart-seeds');

const seedUsers = require('./users-seed')

const seedCategory= require('./category-seeds')

const sequelize= require('../config/connection')

// const seedAll = async()=>{

//     await sequelize.sync({force:true})
//     console.log('\n----- DATABASE SYNCED -----\n');

//     await seedBrands();
//     console.log('\n-----Brands SEEDED -----\n');

//     await seedProducts();
//     console.log('\n----- Products SEEDED -----\n');

//     process.exit(0)
// }

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedBrands();
    console.log('\n----- Brands SEEDED -----\n');
  
   
    await seedUsers();
    console.log('\n----- User SEEDED -----\n');
    await seedCart();
    console.log('\n----- Cart SEEDED -----\n');

    await seedCategory()
    console.log('\n----- Category SEEDED -----\n');
    
    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');
   
  
    process.exit(0);
  };

seedAll();