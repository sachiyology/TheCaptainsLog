const { Schema, model } = require('mongoose');
const logSchema = new Schema({
  title: { type: String, required: true, unique: true },
  entry: { type: String, required: true ,unique: true },
  shipIsBroken: { type: Boolean, required: true },
});


const Log = model('Log', logSchema);
module.exports = Log;
