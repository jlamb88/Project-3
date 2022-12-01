const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
// Stripe Secret Key
const stripe = require('stripe')('sk_test_51M9WEeA0zgGYE8hKfLzdebUdsNrrjNE3SI2bkSS8NclVm5VXPYz0VglrMEMnmJnK4uKi3jsQvBEkHMaFZEpSJsLr00EcdyU0Ss');


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// app.use(cors()); // For Stripe
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Stripe request - can move elsewhere if necessary
// app.post('/checkout', async (req, res) => {
//   const items = req.body.items;
//   let lineItems = [];
//   items.forEach((item) => { // converts items to Stripe friendly format
//       lineItems.push(
//           {
//               price: item.id,
//               quantity: item.quantity
//           }
//       )
//   });

// creates session with items that Stripe can now read
// const session = await stripe.checkout.sessions.create({
//   line_items: lineItems,
//   mode: 'payment',
//   success_url: 'http://localhost:3000/success', // these addresses will need to change
//   cancel_url: 'http://localhost:3000/success'
// });

// res.send(JSON.stringify({ // sends Stripe info back to front end
//   url: session.url
// }));
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);