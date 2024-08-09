const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'jkohn'

    },
    {
        username: 'Jake',
        password: 'jake'
    },
    {
        username: 'Joe',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);
console.log("user-seeds")
module.exports = seedUsers;