import React, {useState,useRef} from 'react';
import { useMutation,useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import "./styles.css";
const faunadb = require('faunadb'),
  q = faunadb.query;

  const GET_AUTHOR = gql`
  {
    allAuthors {
          id
          name
          married
      }
  }
  `;

const Home = () => {
    const { loading, error, data } = useQuery(GET_AUTHOR);
    if (loading)
        return <h2>Loading..</h2>

    if (error)
        return <h2>Error</h2>

    console.log(data)  

    return (
        <div className="container">
            Hello World!!
        </div>
    )
}
export default Home;