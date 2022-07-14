const { ApolloServer, gql } = require("apollo-server")
const fs = require("fs")
const path = require("path")
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// リゾルバ関係のファイル
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Device = require("./resolvers/Device")
const Payment = require("./resolvers/Payment")
const PaymentItem = require("./resolvers/PaymentItem")

const resolvers = {
    Query,
    Mutation,
    Device,
    Payment,
    PaymentItem
}


const server = new ApolloServer(
    {
        typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
        resolvers,
        context: ({req}) => {
            return {
                ...req,
                prisma,
            }
        }
    }
)

server.listen().then(({url}) => {
    console.log("graphql server start")
})
