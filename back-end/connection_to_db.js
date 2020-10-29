const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


const schema_content = new mongoose.Schema({
    desc: String,
    value: String
  },{ collection : 'content' });

  const Mymodel = mongoose.model('content', schema_content);

module.exports = Mymodel

