import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_GRAPHQL_API, {
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
})


export const CREATE_USER_SCORE = gql`
    mutation CreateUserScore($name: String!, $score: Float!) {
        createUserScore(data: { name: $name, score: $score }) {
            id
        }
    }
`;

export const PUBLISH_USER_SCORE = gql`
mutation PublishUserScore($id: ID!){
    publishUserScore(where: {id: $id}, to: PUBLISHED){
        id
    }
}
`