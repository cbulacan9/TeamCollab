'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  number: Number,
  description: String,
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}],
  taskId: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  hours: Number
});

module.exports = mongoose.model('Project', ProjectSchema);