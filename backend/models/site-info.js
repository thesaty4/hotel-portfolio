const mongoose = require('mongoose');
const siteInfoSchema = new mongoose.Schema({
    sliderContent: [{
        image: String,
        title: String,
        desc: String,
    }],
    quoteContent: {
        content: String,
        writer: String,
    },
    customerReview: [{
        name: String,
        image: String,
        designation: String,
        notes: String,
    }],
    galleryContent: [{ image: String }],
    items: {
        [String]: [{
            title: String,
            desc: String,
            image: String,
            currencyType: String,
            price: Number,
        }],
    },
}, { collection: 'site-info' });

module.exports = mongoose.model('siteInfo', siteInfoSchema);
