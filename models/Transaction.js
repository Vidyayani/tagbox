const sequelize = require('../middleware/dbConnect')
const trans = sequelize.models.transaction

const transaction = class {

  constructor(tkn,dt, desc, amt,curr) {
    this.trans = trans.build({ date: Date.parse(dt), token: tkn, description: desc, amount: parseFloat(amt), currency:curr })
    this.trans.save();
  }

  static getTransactionsByUser(tkn) {
    return new Promise ((resolve,rej) => trans.findAll({
      where : {
        token : tkn
      }
    }).then( (data) => {
      resolve(JSON.parse(JSON.stringify(data,null,2)))
    } ))
  }

}

module.exports = transaction