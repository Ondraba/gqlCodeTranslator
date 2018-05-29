const mongoose = require("mongoose");
const graphql = require("graphql");
const GrapQLDateTime = require("../types/DateType");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID , GraphQLInt } = graphql;

const Phrase = mongoose.model("phrase");
const PhraseType = require("../types/PhraseType");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPhrase: {
      type: PhraseType,
      args: {
        phrase: { type: GraphQLString }
      },
      resolve(parentValue, { phrase }) {
        return Phrase.save(phrase);
      }
    },
    deletePhrase: {
      type: PhraseType,
      args: { _id: { type:GraphQLID } },
        resolve(parentValue, { _id }){
          return Phrase.remove({ _id })
        }
    },
  }
});

module.exports = mutation;
