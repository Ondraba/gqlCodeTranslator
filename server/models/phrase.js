const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Translate = require('../services/translator');

const PhraseSchema = new Schema({
  phrase: String,
  translation: { type: String, default: " " },
  createdAt: { type: Date, default: Date.now }
});

PhraseSchema.statics.save = async function(phrase) {
  const Phrase = this;

  const translated =  await Translate.translate(phrase);

  if (!phrase) {
    throw new Error("Phrase save error!");
  }
  const _phrase = new Phrase({ phrase, translation: translated });

  return _phrase.save((err, _phrase) => {
    if (err) throw err;
  });
};

mongoose.model("phrase", PhraseSchema);

