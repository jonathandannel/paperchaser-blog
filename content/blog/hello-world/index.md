---
title: Painless GraphQL schema generation with Gatsby
date: '2019-05-01T22:12:03.284Z'
description: In this tutorial, we look at how to easily generate GraphQL schemas with Gatsby.
author: Joshua Koudys
---

It's easy.

- Add the json transformer plugin.

`npm install --save gatsby-transformer-json`

- In your `gatsby-config.js`, add the following:

```javascript
'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
```

- In `src/data`, let's create a json file with our blog's contributors.

```json
[
  {
    "name": "Joshua Koudys",
    "email": "josh@clausehound.com",
    "role": "Chief Technology Officer"
  },
  {
    "name": "Greg O'Grady",
    "email": "greg@clausehound.com",
    "role": "Software Engineer"
  },
  {
    "name": "Ian Hume",
    "email": "ian@clausehound.com",
    "role": "Backend Developer"
  },
  {
    "name": "Jonathan Dannel",
    "email": "jonathan@clausehound.com",
    "role": "Front End Developer"
  }
]
```

- Add a script to your `package.json`:
  `GATSBY_GRAPHQL_IDE=playground gatsby develop`

- Run it, and navigate to the GraphQL development playground. Click the 'schema' tab on the right, and voila:

```graphql
type ContributorsJson implements Node {
  id: ID!
  parent: Node
  children: [Node!]!
  internal: Internal!
  name: String
  email: String
  role: String
}
```

```graphql
contributorsJson(
    id: StringQueryOperatorInput
    parent: NodeFilterInput
    children: NodeFilterListInput
    internal: InternalFilterInput
    name: StringQueryOperatorInput
    email: StringQueryOperatorInput
    role: StringQueryOperatorInput
  ): ContributorsJson
  allContributorsJson(
    filter: ContributorsJsonFilterInput
    sort: ContributorsJsonSortInput
    skip: Int
    limit: Int
  ): ContributorsJsonConnection
```

Our GraphQL types are ready to be queried! Gatsby has conveniently generated an `allContributorsJson` object with all our contributors, and a `contributorsJson` type for us to run queries on.

```graphql
query MyQuery {
  allContributorsJson {
    edges {
      node {
        name
        email
        role
      }
    }
  }
}
```

which returns our data:

```javascript
{
  "data": {
    "allContributorsJson": {
      "edges": [
        {
          "node": {
            "name": "Joshua Koudys",
            "email": "josh@clausehound.com",
            "role": "Chief Technology Officer"
          }
        },
        {
          "node": {
            "name": "Greg O'Grady",
            "email": "greg@clausehound.com",
            "role": "Software Engineer"
          }
        },
        {
          "node": {
            "name": "Ian Hume",
            "email": "ian@clausehound.com",
            "role": "Backend Developer"
          }
        },
        {
          "node": {
            "name": "Jonathan Dannel",
            "email": "jonathan@clausehound.com",
            "role": "Front End Developer"
          }
        }
      ]
    }
  }
}
```

Yay!
