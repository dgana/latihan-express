var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var datasSchema = new Schema({

module.exports = mongoose.model('datas', datasSchema);