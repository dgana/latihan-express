var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var dataDatesSchema = new Schema({

module.exports = mongoose.model('dataDates', dataDatesSchema);