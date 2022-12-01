const db = require('../config/connection');
const { User, Product } = require('../models');
const seeds = require('./seedsjson');

db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(seeds.seedUser());

    await Product.deleteMany({})

    await Product.create(seeds.seedProduct())


  }



  catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
