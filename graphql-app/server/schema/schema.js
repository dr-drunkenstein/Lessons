const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLSchema } = graphql;

const books = [
    { name: 'a', genre: 'xxx', id: '1', authorID: '1' },
    { name: 'b', genre: 'yyy', id: '2', authorID: '2' },
    { name: 'c', genre: 'zzz', id: '3', authorID: '3' }
]

const authors = [
    { name: 'g', age: 21, id: '1' },
    { name: 'h', age: 22, id: '2' },
    { name: 'j', age: 23, id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent)
                return _.find(authors, { id: parent.authorID })
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(books, { id: args.id })
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: rootQuery
})