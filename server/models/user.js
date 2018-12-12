const {mongoose} = require('../db/mongoose.js');

var User = mongoose.model('User', {
    email: {
        required: true,
        type: String,
        minlength: 1,
        trim: true
    }
});

module.exports = {
    User
};