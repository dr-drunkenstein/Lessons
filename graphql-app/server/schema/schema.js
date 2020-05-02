const graphql = require('graphql')
const _ = require('lodash')

const Book = require('../models/book')
const Author = require('../models/author')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLSchema,
    GraphQLList } = graphql;

// const books = [
//     { name: 'a', genre: 'xxx', id: '1', authorID: '1' },
//     { name: 'b', genre: 'yyy', id: '2', authorID: '2' },
//     { name: 'c', genre: 'fantasy', id: '3', authorID: '3' },
//     { name: 'Lord of The Rings', genre: 'fantasy', id: '4', authorID: '3' },
//     { name: 'g', genre: 'fantasy', id: '5', authorID: '3' },
// ]

// const authors = [
//     { name: 'g', age: 21, id: '1' },
//     { name: 'h', age: 22, id: '2' },
//     { name: 'j', age: 23, id: '3' }
// ]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // console.log(parent)
                // return _.find(authors, { id: parent.authorID })
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return _.filter(books, { authorID: parent.id })
            }
        }
    })
})

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(books, { id: args.id })
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(authors, { id: args.id })
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return books
            }
        },
        authors: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return authors
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                })
                return author.save()
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: GraphQLString },
                author: { type: GraphQLString },
                genre: { type: GraphQLString },
                authorID: { type: GraphQLID }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    author: args.author,
                    genre: args.genre,
                    authorID: args.authorID
                })
                return book.save()
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation
})