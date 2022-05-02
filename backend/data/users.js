const bcrypt = require('bcrypt')

const users = [
    {
        username: 'Admin',
        email: 'admin@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },

    {
        username: 'Test1',
        email: 'test1@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },

    {
        username: 'Test2',
        email: 'test2@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },

    {
        username: 'Test3',
        email: 'test3@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
]



module.exports = users
