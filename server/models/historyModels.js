'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
  podAName: { type: String, required: true },
  podAWeight: { type: Number },
  podAContent: { type: String },
  podBName: { type: String, required: true },
  podBWeight: { type: Number },
  podBContent: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const History = mongoose.model('History', historySchema);

module.exports = { History };