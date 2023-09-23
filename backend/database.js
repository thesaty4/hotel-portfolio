var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/hotel-portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
conn.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = conn;