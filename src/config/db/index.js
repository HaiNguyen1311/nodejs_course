const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('connect thành công')
    } catch (error) {
        console.log('connect thất bại')
    }
}
module.exports = { connect }
