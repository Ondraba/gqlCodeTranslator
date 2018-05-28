const mongoose = require('mongoose');
const graphql = require('graphql')
const GrapQLDateTime = require('./DateType')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql

const PhraseType = new GraphQLObjectType({
  name: 'PhraseType',
  fields: () => ({
    _id: { type: GraphQLID },
    phrase: { type: GraphQLString },
    translation: { type: GraphQLString }
  })
})

module.exports = PhraseType
