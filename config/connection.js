const mongoose = require('mongooe');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api',
    {
        useNEWUrlParser: true,
        useUnifiedTopology: true,
    }

);

mongoose.set('debug', true);

module.export = mongoose.connection;