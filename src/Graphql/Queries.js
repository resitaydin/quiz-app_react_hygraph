import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_GRAPHQL_API)


export const USER_SCORE_QUERY = gql`
    {
        userScores {
            name
            score
        }
    }
`