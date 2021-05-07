const sequelize = require('../middleware/dbConnect')
const trans = sequelize.models.transaction

const transaction = class {

  constructor(tkn, desc, amt) {
    this.trans = trans.build({ date: new Date(), token: tkn, description: desc, amount: amt, currency: "GBP" })

  }

  saveTransaction() {
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