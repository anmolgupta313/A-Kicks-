const {Users } = require("../models")

const usersData=[{

    userName:"Anmol",
    password:"Lomna@321"
   
    // products_id:1
}]

const seedsUsers= ()=>{
    return Users.bulkCreate(usersData)
};

module.exports= seedsUsers;