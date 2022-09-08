const { ApolloServer, gql } = require('apollo-server');

// データそのもの
const books = [
  {
    title: '吾輩は猫である',
    author: '夏目漱石'
  },
  {
    title: '走れメロス',
    author: '太宰治'
  }
];

// APIの問い合わせの設定
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    test: [Book]
  }
`;

// どういう値を返すのかの設定
const resolvers = {
  Query: {
    test: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
