const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer} = require('apollo-server-core');
const { mongoose } = require('mongoose');

const http = require('http')

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

(async () => {
  const app = express();

  const httpServer = http.createServer(app)

  const corsOption = {
    origin: '*',
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    credential: true
  }
  

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: corsOption })

  await mongoose.connect('mongodb+srv://storylinesmile:KhiQPLdIN3ayb0ww@cluster0.tyxzw.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Mongodb connection')
  }).catch(error => console.log(error));

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
})()