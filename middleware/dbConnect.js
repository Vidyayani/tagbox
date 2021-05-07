const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const sequelize = new Sequelize('tagbox-db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

sequelize.define('user', {
    token: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    amount: {
        type: DataTypes.BIGINT
    }
}, {
    timestamps: false,
    tableName: 'users'
});

sequelize.define('transaction', {
    date: {
        type: DataTypes.DATE
    },
    token: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    amount: {
        type: DataTypes.BIGINT
    },
    currency: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    tableName: 'transactions'
});

module.exports = sequelize
