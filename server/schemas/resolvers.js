const { User, Product, Order, Comment } = require('../models/')

const resolvers = {
    Query: {
        user: async () => {
            return await User.find({})
        }
    }
}