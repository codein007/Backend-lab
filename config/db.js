const mongoose = require('mongoose');

async function connection(mongoUrl) {
    try {
        await mongoose.connect(mongoUrl);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("DB Connection Error:", err.message);
        process.exit(1);
    }
}

module.exports = connection;