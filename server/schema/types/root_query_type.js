const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString } = graphql;

const Phrase = mongoose.model("phrase");
const PhraseType = require("./PhraseType");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    phrases: {
      type: new GraphQLList(PhraseType),
      resolve() {
        return Phrase.find({}).sort({ createdAt: -1 });
      }
    }
  })
});

module.exports = RootQueryType;
