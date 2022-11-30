const { User, Product, Order, Cart } = require('../models/')
const { signToken } = require('../utils/auth')
const { AuthenticationError } = require('apollo-server-express')
// Stripe Secret Key
const stripe = require('stripe')('sk_test_51M9WEeA0zgGYE8hKfLzdebUdsNrrjNE3SI2bkSS8NclVm5VXPYz0VglrMEMnmJnK4uKi3jsQvBEkHMaFZEpSJsLr00EcdyU0Ss');

const resolvers = {
    Query: {
        user: async (parent, userId) => {
            return await User.findOne({ _id: userId })
        },
        products: async () => {
            return await Product.find({})
        },
        product: async (parent, productId) => {
            return await Product.findOne({ _id: productId })
        },
        order: async (parent, orderId) => {
            return await Order.findOne({ _id: orderId })
        },
        cart: async (parent, userId) => {
            return await Cart.findOne({ user: { _id: userId } })
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ products: args.products });
            const line_items = [];

            const { products } = await order.populate('products');

            for (let i = 0; i < products.length; i++) {
                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description
                });

                const price = await stripe.prices.create({
                    product: product._id,
                    unit_amount: products[i].price * 100,
                    currency: 'usd',
                });

                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            // stripe checkout
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/cancel`
            });

            return { session: session.id };
        }
    },
    Mutation: {
        addUser: async (parent, { firstName, lastName, address, state, zipcode, phone, email, password }) => {
            return await User.create({ firstName, lastName, address, state, zipcode, phone, email, password })
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('This email cannot be found')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password. Please try again')
            }

            const token = signToken(user)

            return { token, user }
        },
        addOrder: async (parent, { user, products, total }, context) => {
            return await Order.create({ user, products, total, transId })
        },
        updateUser: async (parent, { userId, firstName, lastName, address, state, zipcode, phone, email, password }) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { firstName, lastName, address, state, zipcode, phone, email, password },
                { new: true }
            )
        },
        addPayment: async (parent, { userId, userPayment }) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { payment: userPayment } },
                { new: true }
            )
        },
        updatePayment: async (parent, { userId, userPayment }) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { payment: { _id: payId } } },
                { $addToSet: { userPayment } },
                { new: true }
            )
        },
        deletePayment: async (parent, { userId, payId }) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { payment: { _id: payId } } }
            )
        },
        addComment: async (parent, { productId, text, rating }) => {
            return await Product.findOneAndUpdate(
                { _id: productId },
                { $addToSet: { text, rating } },
                { new: true }
            )
        },
        updateCartItems: async (parent, { userId, productId, quantity }) => {
            return await Cart.findOneAndUpdate(
                { userId: user._id },
                { productId: product._id },
                { quantity },
                { new: true }
            )
        },
        deleteCartItem: async (parent, { userId, productId }) => {
            return await Cart.findOneAndDelete(
                { userId: user._id } || { productId: product._id }
            )
        }

    }
}


module.exports = resolvers