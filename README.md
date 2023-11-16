# GraphQL
- The GraphQL is a Query Language.
- Alternative to using a REST API

### REST API vs GraphQL
#### REST API
- Over fetching > Getting back more data than we need
- Under fetching > Getting back less data than we need. Then we have to request additional data using another API call.

#### GraphQL
- Single Endpoint > Getting all the data using single call.

### How to fetch single review? Eg:
1. Go to the Apollo Sandbox
2. In the **Operation** window type below,
`query ExampleQuery($id: ID!) {
   game(id: $id) {
      id
      reviews {
        rating
        content
      }
   }
}`
3. If you want to fetch '1', you have to type below input in the **Variables** window
`{
   "id": "1"
}`
4. Then Run & Enjoy