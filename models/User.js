const sequelize = require('../middleware/dbConnect')
const user = sequelize.models.user

const User = class {
  constructor(tkn) {
    this.user = user.build({ token: tkn, amount: 1000, currency: 'GBP' })
    this.user.save();
  }

  static updateUser(tkn,spent) {
    user.decrement('amount', { by: spent, where: { token: tkn }})
    // user.update({ amount: sequelize.literal('amount +',spent) }, { where: { id: model_id } });

  }

  static hasFunds(tkn, toSpend) {
    return new Promise((resolve, reject) => {
      user.findAll({
        where: {
          token: tkn
        }
      }).then(data => {
        let users = JSON.parse(JSON.stringify(data, null, 2))
        console.log(parseInt(users[0].amount))
        resolve(parseInt(users[0].amount) >= toSpend)
      })
    })
  }

  static getUser(tkn){
    return new Promise((resolve, reject) => {
      user.findAll({
        where: {
          token: tkn
        }
      }).then(data => {
        resolve(JSON.parse(JSON.stringify(data, null, 2))[0])
      })
    })

  }

}

module.exports = User
