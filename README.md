# GraphQL w/ Database

GraphQL Server on Docker with postgresql

単一のエンドポイントへqueryを投げることでCRU~~D~~処理が可能。

マイグレーションしたければ ``$ yarn sequelize help``

portは4000を使用。

データの永続性はなし。

## Build

```shell
#!/bin/bash

# Start

$ yarn install
# or
$ npm install

$ cd docker
$ docker-compose up

# use graphiql
# http://localhost:4000/graphiql

# direct
# http://localhost:4000/graphql?query={  users {    id    firstName    lastName    updatedAt  }}


# End
$ docker kill $(docker ps -aq)
$ docker rm $(docker ps -aq)
$ docker rmi docker_gql-server
$ docker rmi docker_postgres
```

## Query

Graphiqlでのお話です。

```graphql
# e.g.
query {
  users {
    id
    firstName
    lastName
    createdAt
  }
}

query {
  users {
    firstName
  }
}

query {
  users {
    id
    lastName
  },
  books {
    title
    author
    price
  }
}
```

## Mutation

```graphql
mutation {
  createUser(firstName: "test", lastName: "name", email: "a@a.com") {
    id
    firstName
  }
}

mutation {
  updateUser(id: 1, firstName: "hogeee", lastName: "hageeee") {
    id
    firstName
    lastName
  }
}

```

## Schema

BookはDB上にはありません。

```graphql
type User {
  id: Int!
  firstName: String!
  lastName: String!
  email: String
  createdAt: String!
  updatedAt: String!
}

type Book {
  title: String
  author: String
  price: Int
}
```
