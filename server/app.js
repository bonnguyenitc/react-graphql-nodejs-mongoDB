const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app =  express();

app.use(cors());
//connect database
mongoose.connect("mongodb://bon:2t3MGad5LqG6BtS@ds131784.mlab.com:31784/graphql")
mongoose.connection.once('open', () => {
    console.log("Connected to database")
})

const PORT = 4000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running ${PORT}`)
})